// import { takeEvery, call, put } from "redux-saga/effects";
// import humps from "humps";
// import api from "./api";

// import { AppActionTypes } from 'state/modules/app/actions';

// function* send(action) {
//   const { message } = action.payload;

//   try {
//     const response = yield call(api.send, message);
//     const payload = humps.camelizeKeys(response);

//     if (payload.success === false) {
//       // eslint-disable-next-line no-console
//       console.error(payload.error);
//       yield put({ type: types.SEND_FAIL });
//     }

//     yield put({ type: types.SEND_SUCCESS, payload });
//   } catch (error) {
//     yield put({ type: types.SEND_FAIL });
//   }
// }

// export function* appSaga() {
//   yield takeEvery(types.SEND, send);
// }
