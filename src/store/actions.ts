export enum actions {
  API_ERROR = 'EVENT/API_ERROR_RECEIVED',

  FETCH_WEATHER = 'COMMAND/FETCH_WEATHER_FOR_LAT_LNG',
  WEATHER_DATA_RECEIVED = 'EVENT/WEATHER_DATA_RECEIVED',
  WEATHER_ID_RECEIVED = 'EVENT/WEATHER_ID_RECEIVED',

  INITIALIZE_LONG_POLLING = 'COMMAND/INITIALIZE_LONG_POLLING',
  CONTINUE_LONG_POLLING = 'EVENT/CONTINUE_LONG_POLLING',

  FETCH_DRONE = 'COMMAND/FETCH_DRONE',
  DRONE_DATA_RECEIVED = 'EVENT/DRONE_DATA_RECEIVED',
  DRONE_INCREMENT_LAST_RECEIVED = 'EVENT/DRONE_INCREMENT_LAST_RECEIVED',
}

export interface Action {
  type: actions;
  [index: string]: any;
}