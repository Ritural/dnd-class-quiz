import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from 'store/modules/example/actions';

export function* exampleSaga() {
  yield takeEvery(FETCH_USERS, fetchUsers);
}

function* fetchUsers() {
  try {
    const response = yield fetch('https://jsonplaceholder.typicode.com/users');

    const users = yield response.json();

    console.log('users', users);

    yield put({
      type: FETCH_USERS_SUCCESS,
      payload: {
        users,
      },
    });
  } catch (error) {
    yield put({
      type: FETCH_USERS_FAILURE,
      payload: {
        error,
      },
    });
  }
}
