import { takeLeading, put } from 'redux-saga/effects';
import * as actions from './actions';
import { verifySession } from './firebase';
import ActionTypes from './actionTypes';

function* callVerifySession() {
  const currentUser = verifySession();
  if (currentUser !== null) {
    yield put(actions.verifyPreviousSessionSuccess(currentUser));
  }
  yield put(actions.detectPreviousSessionFailed());
}

export default function* sessionSaga() {
  yield takeLeading(ActionTypes.VERIFY_PREVIOUS_SESSION, callVerifySession);
}
