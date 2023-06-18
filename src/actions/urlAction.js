import axios from 'axios';

import {
  URLANALYTICS_REQUEST,
  URLANALYTICS_SUCCESS,
  URLANALYTICS_FAIL,
  CLEAR_ERRORS,
  URLLINKS_REQUEST,
  URLLINKS_SUCCESS,
  URLLINKS_FAIL,
  NEW_URLLINK_REQUEST,
  NEW_URLLINK_FAIL,
  NEW_URLLINK_SUCCESS,
  DELETE_URLLINK_FAIL,
  DELETE_URLLINK_SUCCESS,
  DELETE_URLLINK_REQUEST,
  CREATE_CUSTOMLINK_FAIL,
  CREATE_CUSTOMLINK_SUCCESS,
  CREATE_CUSTOMLINK_REQUEST,
  GENERATE_QR_REQUEST,
  GENERATE_QR_SUCCESS,
  GENERATE_QR_FAIL,
} from '../constants/urlConstant';

const domain = 'http://localhost:4000';

// LoadUser Analytics
export const getUrlAnalytics = () => async (dispatch) => {
  try {
    dispatch({ type: URLANALYTICS_REQUEST });

    const { data } = await axios.get(`${domain}/api/analytics`, {
      withCredentials: true,
    });

    dispatch({
      type: URLANALYTICS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: URLANALYTICS_FAIL,
      payload: err.response.data,
    });
  }
};

// LoadUser Links
export const getUrlLinks = () => async (dispatch) => {
  try {
    dispatch({ type: URLLINKS_REQUEST });

    const { data } = await axios.get(`${domain}/api/history`, {
      withCredentials: true,
    });

    dispatch({
      type: URLLINKS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: URLLINKS_FAIL,
      payload: err.response.data,
    });
  }
};

// Custom Domain
export const createCustomUrl = (id, customUrl) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_CUSTOMLINK_REQUEST });

    const { data } = await axios.put(
      `${domain}/api/url/${id}`,
      { customUrl },
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: CREATE_CUSTOMLINK_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: CREATE_CUSTOMLINK_FAIL,
      payload: err.response.data,
    });
  }
};

// New Link
export const createUrl = (longUrl, customUrl) => async (dispatch) => {
  try {
    dispatch({ type: NEW_URLLINK_REQUEST });

    const { data } = await axios.post(
      `${domain}/api/url/shorten`,
      { longUrl, customUrl },
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: NEW_URLLINK_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: NEW_URLLINK_FAIL,
      payload: err.response.data,
    });
  }
};

// DeleteUrl Links
export const deleteUrl = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_URLLINK_REQUEST });

    const { data } = await axios.delete(`${domain}/api/url/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: DELETE_URLLINK_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: DELETE_URLLINK_FAIL,
      payload: err.response.data,
    });
  }
};

// Generate QR
export const generateQr = (id) => async (dispatch) => {
  try {
    dispatch({ type: GENERATE_QR_REQUEST });

    const { data } = await axios.put(
      `${domain}/api/qr/${id}`,
      {},
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: GENERATE_QR_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GENERATE_QR_FAIL,
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
