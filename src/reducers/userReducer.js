import {
  SIGNIN_FAIL,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  CLEAR_ERRORS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAIL,
} from '../constants/userConstant';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
    case SIGNUP_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case SIGNOUT_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case SIGNOUT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case SIGNIN_FAIL:
    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
