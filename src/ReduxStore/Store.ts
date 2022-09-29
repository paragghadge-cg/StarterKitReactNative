import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

import RootReducer from './Reducers';
import { RootSaga } from './Saga/RootSaga';

const Store = configureStore({ reducer: RootReducer, middleware: middleware });
sagaMiddleware.run(RootSaga);
export default Store;
