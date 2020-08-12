import { createReducer, combineReducers } from '@reduxjs/toolkit';
import authAction from './authAction';

const intialUserState = {
  name: '',
  email: '',
};
const user = createReducer(intialUserState, {
  [authAction.registerSuccess]: (state, { payload }) => payload.user,
  [authAction.loginSuccess]: (state, { payload }) => payload.user,
  [authAction.logoutSuccess]: (state, { payload }) => ({ ...intialUserState }),
  [authAction.currentUserSuccess]: (state, { payload }) => payload,
});
const token = createReducer(null, {
  [authAction.registerSuccess]: (state, { payload }) => payload.token,
  [authAction.loginSuccess]: (state, { payload }) => payload.token,
  [authAction.logoutSuccess]: (state, { payload }) => null,
});
const loader = createReducer(false, {
  [authAction.authLoader]: (state, { payload }) => payload,
});
const error = createReducer(null, {
  [authAction.authError]: (state, { payload }) => payload,
});
export default combineReducers({
  user,
  token,
  loader,
  error,
});
