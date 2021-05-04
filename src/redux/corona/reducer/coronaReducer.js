import * as types from '../action/type';

const initialState = {
  loading: false,
  virus: {},
  error: null
}

export const coronaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_GET_DATA:
      return {
        ...state,
        loading: action.loading
      }
    case types.END_GET_DATA: 
      return {
        ...state,
        loading: action.loading
      }
    case types.GET_DATA_SUCCESS: 
      return {
        ...state,
        virus: action.data,
        error: null
      }
    case types.GET_DATA_FAIL:
      return {
        ...state,
        virus: {},
        error: action.error
      }
    default:
      return state;
  }
}