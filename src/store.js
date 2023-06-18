import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer } from './reducers/userReducer';
import {
  UrlReducer,
  newUrlReducer,
  urlAnalyticsReducer,
  userAnalyticsReducer,
} from './reducers/urlReducer';

const reducer = combineReducers({
  auth: userReducer,
  userUrls: userAnalyticsReducer,
  urlAnalytics: urlAnalyticsReducer,
  url: newUrlReducer,
  urlLink: UrlReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
