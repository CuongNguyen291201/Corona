import { call, put, takeEvery } from 'redux-saga/effects';

import { api } from '../service/api';
import * as actions from '../action/index';
import { helpers } from '../helpers/common';
import { REQUEST_SERVER } from '../action/type';

function* getDataCoronaSaga() {
  try {
    yield put(actions.loadingGetData(true));
    const virus = yield call(api.getDataVirusCorona);
    if (!helpers.isEmptyObject(virus)) {
      yield put(actions.getDataSuccess(virus));
    } else {
      yield put(actions.getDataFail({
        code: 404,
        messages: "Not Found"
      }));
    }
  } catch (err) {
    console.log(err);
  } finally {
    // dispatch action loadingGetData vao reducer
    // Ket thuc call api
    yield put(actions.endLoadingGetData(false));
  }
}

export function* watchGetDataCorona() {
  yield takeEvery(REQUEST_SERVER, getDataCoronaSaga);
}