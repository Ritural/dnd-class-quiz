import createSagaMiddleware from '@redux-saga/core';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import {
  createResponsiveStateReducer,
  responsiveStoreEnhancer,
} from 'redux-responsive';

import { exampleReducer, IExampleState } from 'store/modules/example/reducers';
// import { rootSaga } from "store/modules/main-saga";

export interface IReducerState {
  exampleState: IExampleState;
}

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware({});
const middleware = [routerMiddleware(history), sagaMiddleware];

let composeEnhancers = compose;

if (process.env.REACT_APP_ENVIRONMENT !== 'production') {
  const composeWithDevToolsExtension = (window as any)
    .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension;
  }
}

const rootReducer = combineReducers({
  browser: createResponsiveStateReducer({
    mobile: '(max-width: 767.98px)',
    tablet: '(min-width: 768px) and (max-width:1023.98px)',
    laptop: '(min-width: 1024px) and (max-width:1279.98px)',
    desktop: '(min-width: 1280px) and (max-width:1599.98px)',
    wideScreen: '(min-width: 1600px)',
  }),
  exampleState: exampleReducer,
  router: connectRouter(history),
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(responsiveStoreEnhancer, applyMiddleware(...middleware)),
);

// sagaMiddleware.run(rootSaga);
