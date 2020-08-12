import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../../redux/auth/authSelectors';
const PrivateRoute = ({ IsAuth, Component, ...propsRoute }) => {
  return (
    <Route
      {...propsRoute}
      render={props => {
        return IsAuth ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};
const mapStateToProps = state => {
  return {
    IsAuth: getToken(state),
  };
};
export default connect(mapStateToProps)(PrivateRoute);
