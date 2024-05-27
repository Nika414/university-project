import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigation">
    <NavLink to="disciplines">Дисциплины</NavLink>
    <NavLink to="#">Учебные планы</NavLink>
    <NavLink to="#">Нагрузка кафедры</NavLink>
  </nav>
);

export default Navigation;
