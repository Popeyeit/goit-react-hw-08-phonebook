import axios from 'axios';
import {
  addContact,
  removeItem,
  toggleLoader,
  setError,
  getContacts,
} from './contactsActions';

// {
//       url: 'users/current',
//       method: 'get',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
// }

// const url = 'https://goit-phonebook-api.herokuapp.com/';
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';
export const addContactOperation = item => async (dispatch, getState) => {
  const {
    auth: {
      token
    },
  } = getState();
  try {
    dispatch(toggleLoader(true));
    const res = await axios({
      url: 'contacts',
      method: 'post',
      data: item,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);

    dispatch(addContact(res.data));
  } catch (error) {
    setError(error);
  } finally {
    dispatch(toggleLoader(false));
  }
};
export const deleteContactOperation = (idContact) => async (dispatch, getState) => {
  const {
    auth: {
      token
    },
  } = getState();
  try {
    dispatch(toggleLoader(true));
    await axios({
      url: `contacts/${idContact}`,
      method: 'delete',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(removeItem(idContact));
  } catch (error) {
    setError(error);
  } finally {
    dispatch(toggleLoader(false));
  }
};
export const getContactsOperation = () => async (dispatch, getState) => {
  console.log(getState);

  const {
    auth: {
      token
    },
  } = getState();
  try {
    dispatch(toggleLoader(true));
    const res = await axios({
      url: 'contacts',
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    dispatch(getContacts(res.data));
  } catch (error) {
    setError(error);
  } finally {
    dispatch(toggleLoader(false));
  }
};