import { actions, Action } from '../actions';

export interface DroneData {
  latitude: number;
  longitude: number;
  uom: string;
  accuracy: number;
  metric: number;
  timestamp: Date;
}

export interface DroneState {
  data: DroneData[];
  loading: boolean;
  lastReceived: number;
}

export type DroneReducer = (state: DroneState, action: Action) => DroneState;

const initialState: DroneState = {
  data: [
    {
      latitude: 0,
      longitude: 0,
      metric: 0,
      uom: '',
      accuracy: 0,
      timestamp: new Date(),
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
