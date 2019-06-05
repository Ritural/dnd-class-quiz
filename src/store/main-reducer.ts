import createSagaMiddleware from '@redux-saga/core';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import {
  createResponsiveStateReducer,
  responsiveStoreEnhancer,
} from 'redux-responsive';

import { BREAKPOINTS } from 'store/modules/app/constants';
import { exampleReducer, IExampleState } from 'store/modules/example/reducers';
// import { rootSaga } from "store/modules/main-saga";

export interface IReducerState {
  exampleState?: IExampleState;
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
  browser: createResponsiveStateReducer(
    {
      mobile: BREAKPOINTS.MOBILE,
      tablet: BREAKPOINTS.TABLET,
      laptop: BREAKPOINTS.LAPTOP,
      desktop: BREAKPOINTS.DESKTOP,
    },
    {
      // This assigns anything bigger than desktop as widescreen
      infinity: 'widescreen',
    },
  ),
  exampleState: exampleReducer,
  router: connectRouter(history),
});

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(responsiveStoreEnhancer, applyMiddleware(...middleware)),
);

// sagaMiddleware.run(rootSaga);
