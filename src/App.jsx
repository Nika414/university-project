import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => (
  <div className="App">
    <Header />
    <Outlet />
  </div>
);

export default App;
