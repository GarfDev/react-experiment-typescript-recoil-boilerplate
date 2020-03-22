import { call, takeLatest, put } from 'redux-saga/effects';
import * as actions from './actions';
// import { callApi } from '../../services/api/saga';
import { logUserIn } from './firebase';
import ActionTypes from './actionTypes';

function* callLogUserIn({ payload }: ReturnType<typeof actions.logUserIn>) {
  const response = yield call(logUserIn, payload.username, payload.password);
  console.log(response);
}

export default function* loginSaga() {
  yield takeLatest(ActionTypes.LOG_USER_IN, callLogUserIn);
}
