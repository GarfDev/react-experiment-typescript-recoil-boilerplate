import { call, takeLatest, put } from 'redux-saga/effects';
import * as actions from './actions';
import ActionTypes from './actionTypes';
import { ApiConfig } from './constants';
import { callApi } from '../../services/api/saga';

function* veirfySession({ payload }: ReturnType<typeof actions.sessionVerify>) {
  const response = yield call(callApi, {
    method: 'get',
    route: ApiConfig.SESSIONVERIFY,
    data: payload.data,
  });
  if (response.success) {
    yield put(actions.sesionVerifySuccess(response));
  }
  if (payload.callback) {
    payload.callback(response);
  }
}

export default function* applicationSaga() {
  yield takeLatest(ActionTypes.SESSION_VERIFY, veirfySession);
}
