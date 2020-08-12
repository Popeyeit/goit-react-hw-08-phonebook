import {
  configureStore
} from '@reduxjs/toolkit';
import contactsReduser from './contacts/contactsReducers';
import authReduser from './auth/authReducers'
import {
  persistStore,
  persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token']
}


export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    auth: persistReducer(persistConfig, authReduser)
  },
});
export const persist = persistStore(store)