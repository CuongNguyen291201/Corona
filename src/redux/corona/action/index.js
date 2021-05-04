import * as types from './type';

export const requestDataSever = () => ({
  type: types.REQUEST_SERVER
});

/**
 * Cac action se duoc saga dispatch vao reducer trong store
 */

export const loadingGetData = (loading) => ({
  type: types.START_GET_DATA,
  loading
});

export const endLoadingGetData = (loading) => ({
  type: types.END_GET_DATA,
  loading
});

export const getDataSuccess = (data) => ({
  type: types.GET_DATA_SUCCESS,
  data
});

export const getDataFail = (error) => ({
  type: types.GET_DATA_FAIL,
  error
});