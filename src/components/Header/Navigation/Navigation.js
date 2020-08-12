import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken, getLoader } from '../../../redux/auth/authSelectors';
import UserMenu from '../../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import './Navigation.css';
const Navigation = ({ token, loader }) => {
  return (
    <header className="header">
      {token && (
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink
                to="/contacts"
                className="nav-link"
                activeClassName="nav-link-active"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      {token && !loader ? <UserMenu /> : !loader && <AuthNav />}
    </header>
  );
};
const mapStateToProps = state => {
  return {
    token: getToken(state),
    loader: getLoader(state),
  };
};

export default connect(mapStateToProps)(Navigation);
