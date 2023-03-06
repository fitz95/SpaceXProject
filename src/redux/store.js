import { configureStore, combineReducers } from '@reduxjs/toolkit';

import missionsReducer from './missionsSlice';
import rocketsReducer from './rocketsSlice';

const store = configureStore({
  reducer: combineReducers({
    missions: missionsReducer,
    rockets: rocketsReducer,
  }),
});

export default store;
