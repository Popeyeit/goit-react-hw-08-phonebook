import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <NavLink
          to="/register"
          className="nav-link"
          activeClassName="nav-link-active"
        >
          Signup
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="login"
          className="nav-link"
          activeClassName="nav-link-active"
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
