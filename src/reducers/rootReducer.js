import { combineReducers } from 'redux';
import {
  GET_NEOS_REQUEST,
  GET_NEOS_RECEIVE,
  GET_NEOS_FAILURE
} from '../actions/actionTypes';

const initialState = {
  error: null,
  isFetching: false,
  neos: null
};

const neosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEOS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case GET_NEOS_RECEIVE:
      return {
        ...state,
        isFetching: false,
        neos: action.payload
      }
    case GET_NEOS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({ neosReducer });

export default rootReducer;
