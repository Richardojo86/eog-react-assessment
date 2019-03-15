import { takeEvery, call, put, cancel, all } from 'redux-saga/effects';

import API from '../api';
import * as actions from '../actions';

function* watchFetchDrone(action) {
  const { error, data } = yield call(API.getDroneData);
  if (error) {
    console.log({ error });
    yield put({ type: actions.API_ERROR, code: error.code });
    yield cancel();
    return;
  }

  const accuracyMax = Math.max(...data.map(d => d.accuracy));
  const mostAccurate = data.find(i => i.accuracy === accuracyMax);
  const { latitude, longitude } = mostAccurate;
  yield put({ type: actions.FETCH_WEATHER, latitude, longitude });
  yield put({ type: actions.DRONE_DATA_RECEIVED, data: mostAccurate });
}

function* watchAppLoad() {
  yield all([takeEvery(actions.FETCH_DRONE, watchFetchDrone)]);
}

export default [watchAppLoad];
