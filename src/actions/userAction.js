import axios from 'axios';

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
  SIGNOUT_FAIL,
  SIGNOUT_SUCCESS,
} from '../constants/userConstant';

const domain =
  'http://localhost:4000' || 'https://urlshortner-server.onrender.com';

//Signin

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SIGNIN_REQUEST });

    const response = await axios.post(
      `${domain}/api/users/signin`,
      { email, password },
      { withCredentials: true }
    );

    dispatch({
      type: SIGNIN_SUCCESS,
      payload: response.data.user,
    });
  } catch (err) {
    dispatch({
      type: SIGNIN_FAIL,
      payload: err.response.data,
    });
  }
};

// Signup
export const signup = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUP_REQUEST });

    const { data } = await axios.post(
      `${domain}/api/users/signup`,
      { email, password },
      { withCredentials: true }
    );

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: data.user,
    });
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: err.response.data,
    });
  }
};

// Signout user
export const Signout = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${domain}/api/users/signout`, {
      withCredentials: true,
    });

    dispatch({
      type: SIGNOUT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: SIGNOUT_FAIL,
      payload: err.response.data,
    });
  }
};

// LoadUser
export const LoadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`${domain}/api/users/currentuser`, {
      withCredentials: true,
    });

    if (data) {
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: data.currentUser,
      });
    } else {
      dispatch({
        type: LOAD_USER_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: err.response.data,
    });
  }
};

//Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
