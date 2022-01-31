import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { ICartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const Middlewares = [sagaMiddleware];

const store = createStore(
   rootReducer,
   composeWithDevTools(
    applyMiddleware(...Middlewares)
   )
);


sagaMiddleware.run(rootSaga);

export default store;