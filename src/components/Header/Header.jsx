import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../assets/images/logo.svg';

const Header = () => (
  <div className="header">
    <NavLink to="/" className="header__image">
      <img src={logo} alt="logo" />
    </NavLink>
    <Navigation />
  </div>
);

export default Header;
