import { createAction } from '@reduxjs/toolkit';
const authLoader = createAction('auth/loaderToggle');
const authError = createAction('auth/error');
const registerSuccess = createAction('auth/registerSuccess');
const logoutSuccess = createAction('auth/logoutSuccess');
const loginSuccess = createAction('auth/loginSuccess');
const currentUserSuccess = createAction('auth/currentUserSuccess');

export default {
  authLoader,
  registerSuccess,
  authError,
  loginSuccess,
  logoutSuccess,
  currentUserSuccess,
};
