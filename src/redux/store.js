import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';

const logger = createLogger({
  collapsed: true,
});

const store = configureStore({
  reducer: combineReducers({
    missions: missionsReducer,
    rockets: rocketsReducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
