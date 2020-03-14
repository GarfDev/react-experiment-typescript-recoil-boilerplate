import { call, takeLatest, put } from 'redux-saga/effects';
import * as actions from './actions';
import { ApiConfig } from './constants';
import { callApi } from '../../services/api/saga';
import ActionTypes from './actionTypes';

function* fetchTikiProduct({ payload }: ReturnType<typeof actions.fetchTikiProduct>) {
  const response = yield call(callApi, {
    method: 'get',
    route: ApiConfig.CORS_BYBASS + payload.url,
  });
  if (response.success) {
    yield put(actions.fetchTikiProductSuccess(response));
  }
  if (payload.callback) {
    payload.callback(response);
  }
}

export default function* homepageSaga() {
  yield takeLatest(ActionTypes.FETCH_TIKI_PRODUCT, fetchTikiProduct);
}
