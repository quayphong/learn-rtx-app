import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import createSagaMiddleware from 'redux-saga';
import authReducer from '../features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';
import rootSaga from './rootSaga';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  dashboard: dashboardReducer
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
