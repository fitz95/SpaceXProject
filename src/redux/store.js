import { configureStore, combineReducers } from '@reduxjs/toolkit';

import missionsReducer from './missionsSlice';

const store = configureStore({
  reducer: combineReducers({
    missions: missionsReducer,
  }),
});

export default store;
