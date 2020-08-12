import React from 'react';
import { connect } from 'react-redux';
import { getUserEmail, getToken } from '../../redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperations';
import './UserMenu.css';
const UserMenu = ({ userEmail, logout, token }) => {
  const onLogout = () => logout(token);
  return (
    <div className="user-wrapper">
      <p className="user-email"> Email: {userEmail} </p>
      <button className="user-btn" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    userEmail: getUserEmail(state),
    token: getToken(state),
  };
};

export default connect(mapStateToProps, {
  logout,
})(UserMenu);
