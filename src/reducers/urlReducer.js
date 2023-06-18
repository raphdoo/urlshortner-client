import {
  URLANALYTICS_FAIL,
  URLANALYTICS_REQUEST,
  URLANALYTICS_SUCCESS,
  URLLINKS_REQUEST,
  URLLINKS_SUCCESS,
  URLLINKS_FAIL,
  NEW_URLLINK_FAIL,
  NEW_URLLINK_REQUEST,
  NEW_URLLINK_SUCCESS,
  CLEAR_ERRORS,
  NEW_URLLINK_RESET,
  DELETE_URLLINK_REQUEST,
  DELETE_URLLINK_SUCCESS,
  DELETE_URLLINK_FAIL,
  DELETE_URLLINK_RESET,
  CREATE_CUSTOMLINK_REQUEST,
  CREATE_CUSTOMLINK_SUCCESS,
  CREATE_CUSTOMLINK_RESET,
  CREATE_CUSTOMLINK_FAIL,
  GENERATE_QR_REQUEST,
  GENERATE_QR_SUCCESS,
  GENERATE_QR_FAIL,
  GENERATE_QR_RESET,
} from '../constants/urlConstant';

export const userAnalyticsReducer = (state = { userLinks: [] }, action) => {
  switch (action.type) {
    case URLLINKS_REQUEST:
      return {
        loading: true,
        userLinks: [],
      };

    case URLLINKS_SUCCESS:
      return {
        loading: false,
        userLinks: action.payload,
      };

    case URLLINKS_FAIL:
      return {
        loading: false,
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

export const urlAnalyticsReducer = (state = { urlAnalytics: [] }, action) => {
  switch (action.type) {
    case URLANALYTICS_REQUEST:
      return {
        loading: true,
        urlAnalytics: [],
      };

    case URLANALYTICS_SUCCESS:
      return {
        loading: false,
        urlAnalytics: action.payload,
      };

    case URLANALYTICS_FAIL:
      return {
        loading: false,
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

export const newUrlReducer = (state = { url: {} }, action) => {
  switch (action.type) {
    case NEW_URLLINK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEW_URLLINK_SUCCESS:
      return {
        loading: false,
        success: true,
        url: action.payload,
      };

    case NEW_URLLINK_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case NEW_URLLINK_RESET:
      return {
        ...state,
        success: false,
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

export const UrlReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_URLLINK_REQUEST:
    case CREATE_CUSTOMLINK_REQUEST:
    case GENERATE_QR_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_CUSTOMLINK_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true,
      };

    case GENERATE_QR_SUCCESS:
      return {
        ...state,
        loading: false,
        isCreated: true,
        qrcode: action.payload,
      };

    case DELETE_URLLINK_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
      };

    case DELETE_URLLINK_FAIL:
    case CREATE_CUSTOMLINK_FAIL:
    case GENERATE_QR_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_URLLINK_RESET:
      return {
        ...state,
        isDeleted: false,
      };

    case CREATE_CUSTOMLINK_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case GENERATE_QR_RESET:
      return {
        ...state,
        isCreated: false,
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
