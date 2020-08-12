import axios from 'axios';
import authAction from './authAction';
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

// const token = {
//   setToken(token) {
//     console.log(token);

//     return (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`);
//   },
//   unsetToken() {
//     return (axios.defaults.headers.common['Authorization'] = '');
//   },
// };

export const register = body => async dispatch => {
  try {
    dispatch(authAction.authLoader(true));
    const res = await axios.post('users/signup', body);
    // token.setToken(res.data.token);
    dispatch(authAction.registerSuccess(res.data));
  } catch (error) {
    dispatch(authAction.authError(error));
  } finally {
    dispatch(authAction.authLoader(false));
  }
};

export const login = body => async dispatch => {
  try {
    dispatch(authAction.authLoader(true));
    const res = await axios.post('users/login', body);
    console.log(res.data.token);

    // token.setToken(res.data.token);
    dispatch(authAction.loginSuccess(res.data));
  } catch (error) {
    dispatch(authAction.authError(error));
  } finally {
    dispatch(authAction.authLoader(false));
  }
};
export const logout = () => async (dispatch, getState) => {
    const {auth:{token}} = getState()
  try {
    dispatch(authAction.authLoader(true));
    const res = await axios({
      url: 'users/logout',
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // token.unsetToken();
    dispatch(authAction.logoutSuccess());
  } catch (error) {
    dispatch(authAction.authError(error));
  } finally {
    dispatch(authAction.authLoader(false));
  }
};

export const getCurrentUser = token => async (dispatch, getState) => {
  console.log(token);

  const {
    auth: { token: hasToken },
  } = getState();
  if (!hasToken) {
    return;
  }
  console.log(hasToken);

  try {
    dispatch(authAction.authLoader(true));
    const res = await axios({
      url: 'users/current',
      method: 'get',
      headers: {
        Authorization: `Bearer ${hasToken}`,
      },
    });

    console.log(res);
    // token.setToken(res.data.token);
    dispatch(authAction.currentUserSuccess(res.data));
  } catch (error) {
    dispatch(authAction.authError(error));
  } finally {
    dispatch(authAction.authLoader(false));
  }
};
