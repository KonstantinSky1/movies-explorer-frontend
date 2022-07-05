import React from "react";
import { NavLink } from 'react-router-dom';

import './NavTab.css';

function NavTab() {
  return (
    <nav className="navTab">
      <NavLink to="" className="navTab__item">О проекте</NavLink>
      <NavLink to="" className="navTab__item">Технологии</NavLink>
      <NavLink to="" className="navTab__item">Студент</NavLink>
    </nav>
  );
}

export default NavTab;