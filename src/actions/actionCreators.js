import {
  GET_NEOS_REQUEST,
  GET_NEOS_RECEIVE,
  GET_NEOS_FAILURE
} from './actionTypes';

export const getNeosRequest = () => ({
  type: GET_NEOS_REQUEST
});

export const getNeosReceive = (response) => ({
  type: GET_NEOS_RECEIVE,
  payload: response
});

export const getNeosFailure = (error) => ({
  type: GET_NEOS_FAILURE,
  payload: error
});
