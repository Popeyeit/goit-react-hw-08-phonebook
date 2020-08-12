import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../../redux/auth/authSelectors';
const PublicRoute = ({ IsAuth, Component, destricted, ...propsRoute }) => {
  return (
    <Route
      {...propsRoute}
      render={props => {
        return IsAuth && destricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};
const mapStateToProps = state => {
  return {
    IsAuth: getToken(state),
  };
};
export default connect(mapStateToProps)(PublicRoute);
