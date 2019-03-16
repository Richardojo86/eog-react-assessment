import * as actions from '../actions';

const initialState = {
  data: [],
  loading: false,
  lastReceived: 0,
};

const fetchDrone = (state, action) => {
  return { ...state, loading: true, lastReceived: 0 };
};

const droneDataReceived = (state, { data }) => {
  return { ...state, data, loading: false };
};

const incrementLastReceived = (state, action) => {
  return { ...state, lastReceived: state.lastReceived + 1 };
};

const handlers = {
  [actions.FETCH_DRONE]: fetchDrone,
  [actions.DRONE_DATA_RECEIVED]: droneDataReceived,
  [actions.DRONE_INCREMENT_LAST_RECEIVED]: incrementLastReceived,
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (!handler) return state;
  return handler(state, action);
};
