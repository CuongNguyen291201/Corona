import { call, all } from 'redux-saga/effects';
import { watchGetDataCorona } from './saga/coronaSaga';

export default function* rootSaga() {
  yield all(call[
    watchGetDataCorona
  ])
}