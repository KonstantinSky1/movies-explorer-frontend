import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './Header.css';
import headerLogo from '../../images/headerLogo.svg';
import Navigation from '../Navigation/Navigation.jsx';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img
          className="header__logo"
          src={headerLogo}
          alt="Логотип"
        />
        <Switch>
          <Route exact path="/">
            <div className="header__auth">
              <Link
                to="/signup"
                className="header__registerLink"
              >
                Регистрация
              </Link>
              <Link
                to="/signin"
                className="header__loginLink"
              >
                Войти
              </Link>
            </div>
          </Route>

          <Route path="/movies">
            <Navigation />
          </Route>
        </Switch>
      </div>
    </header>
  );
}

export default Header;