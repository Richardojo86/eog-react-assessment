import * as actions from '../actions';

const initialState = {
  data: [],
  loading: false,
};

const fetchDrone = (state, action) => {
  return { ...state, loading: true };
};

const droneDataReceived = (state, { data }) => {
  return { ...state, data, lastReceived: Date.now(), loading: false };
};

const handlers = {
  [actions.FETCH_DRONE]: fetchDrone,
  [actions.DRONE_DATA_RECEIVED]: droneDataReceived,
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (!handler) return state;
  return handler(state, action);
};
