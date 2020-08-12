import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Contacts from './pages/contacts/Contacts';
import Register from './pages/registration/Registration';
import Login from './pages/login/Login';
import Navigation from './components/Header/Navigation/Navigation';
import { getToken } from './redux/auth/authSelectors';
import { getCurrentUser } from './redux/auth/authOperations';
import PrivateRoute from './components/RoutesPubPriv/PrivateRoute';
import PublicRoute from './components/RoutesPubPriv/PublicRoute';

const App = ({ token, getCurrentUser }) => {
  const history = useHistory();
  useEffect(() => {
    getCurrentUser(token);
  }, []);
  // useEffect(() => {
  //   if (token) {
  //     history.push('contacts');
  //   } else {
  //     history.push('login');
  //   }
  // }, [token, history]);

  return (
    <>
      <Navigation />
      <Switch>
        <PrivateRoute path="/contacts" Component={Contacts} />
        <PublicRoute path="/register" destricted={true} Component={Register} />
        <PublicRoute path="/login" destricted={true} Component={Login} />
      </Switch>
    </>
  );
};
const mapStateToProps = state => {
  return {
    token: getToken(state),
  };
};

export default connect(mapStateToProps, {
  getCurrentUser,
})(App);
