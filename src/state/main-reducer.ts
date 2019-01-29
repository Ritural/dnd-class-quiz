import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { exampleReducer, IExampleState } from 'state/modules/example/reducers';
import createSagaMiddleware from '@redux-saga/core';
import { createResponsiveStateReducer, responsiveStoreEnhancer } from 'redux-responsive';
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

import { BREAKPOINTS } from 'state/modules/app/constants';
// import { rootSaga } from "state/modules/main-saga";

export interface IReducerState {
  exampleState: IExampleState;
} 

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware({});
const middleware = [ routerMiddleware(history), sagaMiddleware ];

let composeEnhancers = compose;

if (process.env.REACT_APP_ENVIRONMENT !== "production") {
  const composeWithDevToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (typeof composeWithDevToolsExtension === "function") {
    composeEnhancers = composeWithDevToolsExtension;
  }
}

const rootReducer = combineReducers({
  browser: createResponsiveStateReducer(
    {
      mobile: BREAKPOINTS.MOBILE,
      tablet: BREAKPOINTS.TABLET,
      laptop: BREAKPOINTS.LAPTOP,
      desktop: BREAKPOINTS.DESKTOP
    },
    {
      // This assigns anything bigger than desktop as widescreen
      infinity: "widescreen"
    }
  ),
  exampleState: exampleReducer,
  router: connectRouter(history)
});

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(responsiveStoreEnhancer, applyMiddleware(...middleware))
);

// sagaMiddleware.run(rootSaga);
