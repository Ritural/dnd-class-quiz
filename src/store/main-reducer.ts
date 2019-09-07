import createSagaMiddleware from '@redux-saga/core';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import { createResponsiveStateReducer, responsiveStoreEnhancer } from 'redux-responsive';

import { mainSaga } from 'store/main-saga';
import { IS_PRODUCTION } from 'store/modules/app/constants';
import { appReducer, IAppState } from 'store/modules/app/reducers';
import { quizReducer, IQuizState } from './modules/quiz/reducers';

export interface IReducerState {
  app: IAppState;
  quiz: IQuizState;
}

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware({});
const middleware = [routerMiddleware(history), sagaMiddleware];

let composeEnhancers = compose;

if (!IS_PRODUCTION) {
  // eslint-disable-next-line no-underscore-dangle
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
  app: appReducer,
  quiz: quizReducer,
  router: connectRouter(history),
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(responsiveStoreEnhancer, applyMiddleware(...middleware)),
);

sagaMiddleware.run(mainSaga);
