import { actions } from '../actions';

export interface DroneState {
  data: any[];
  loading: boolean;
  lastReceived: number;
}

export type DroneReducer = (state: DroneState, action: any) => DroneState;

const initialState: DroneState = {
  data: [
    {
      latitude: '',
      longitude: '',
      metric: 0,
    },
  ],
  loading: false,
  lastReceived: 0,
};

const fetchDrone: DroneReducer = (state: DroneState) => {
  return { ...state, loading: true, lastReceived: 0 };
};

const droneDataReceived: DroneReducer = (state: DroneState, { data }) => {
  return { ...state, data, loading: false };
};

const incrementLastReceived: DroneReducer = (state: DroneState) => {
  return { ...state, lastReceived: state.lastReceived + 1 };
};

const handlers = {
  [actions.FETCH_DRONE]: fetchDrone,
  [actions.DRONE_DATA_RECEIVED]: droneDataReceived,
  [actions.DRONE_INCREMENT_LAST_RECEIVED]: incrementLastReceived,
};

export const droneReducer: DroneReducer = (state = initialState, action) => {
  const handler = handlers[action.type as keyof typeof handlers];
  if (!handler) return state;
  return handler(state, action);
};

export default droneReducer;
