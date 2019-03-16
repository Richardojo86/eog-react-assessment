import { takeEvery, call, put, cancel, all } from 'redux-saga/effects';

import API from '../api';
import * as actions from '../actions';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementLastReceived() {
  yield delay(1000);
  yield put({ type: actions.DRONE_INCREMENT_LAST_RECEIVED });
}

function* initializeLongPolling() {
  yield put({ type: actions.DRONE_INCREMENT_LAST_RECEIVED });
  yield put({ type: actions.FETCH_DRONE });
  yield put({ type: actions.CONTINUE_LONG_POLLING });
}

function* continueLongPolling() {
  yield delay(5000);
  yield put({ type: actions.FETCH_DRONE });
  yield put({ type: actions.CONTINUE_LONG_POLLING });
}

function* watchFetchDrone(action) {
  const { error, data } = yield call(API.getDroneData);
  if (error) {
    console.log({ error });
    yield put({ type: actions.API_ERROR, code: error.code });
    yield cancel();
    return;
  }

  const [{ latitude, longitude }] = data;

  yield put({ type: actions.FETCH_WEATHER, latitude, longitude });
  yield put({ type: actions.DRONE_DATA_RECEIVED, data });
}

function* watchAppLoad() {
  yield all([
    takeEvery(actions.INITIALIZE_LONG_POLLING, initializeLongPolling),
    takeEvery(actions.CONTINUE_LONG_POLLING, continueLongPolling),
    takeEvery(actions.FETCH_DRONE, watchFetchDrone),
    takeEvery(actions.DRONE_INCREMENT_LAST_RECEIVED, incrementLastReceived),
  ]);
}

export default [watchAppLoad];
