import { all, fork } from 'redux-saga/effects';
// import { appSaga } from 'store/module/app/sagas';
import { exampleSaga } from 'store/modules/example/sagas';

export function* mainSaga() {
  yield all([
    // fork(appSaga),
    fork(exampleSaga),
  ]);
}
