import React from 'react';
import { NavLink } from 'react-router-dom';

const Main = () => (
  <div>
    <div className="links">
      <NavLink to="#" className="link link--white">
        Нагрузка кафедры
      </NavLink>
      <NavLink to="#" className="link link--black">
        Образовательная программа
      </NavLink>
    </div>
  </div>
);

export default Main;
