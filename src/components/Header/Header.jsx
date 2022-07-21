import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './Header.css';
import Navigation from '../Navigation/Navigation.jsx';
import LogoLink from '../LogoLink/LogoLink.jsx';

function Header() {
  return (
    <Route path="/(|movies|saved-movies|profile)">
      <header className="header">
        <div className="header__container">
          <LogoLink />
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

            <Route path="(|movies|saved-movies|profile)">
              <Navigation />
            </Route>
          </Switch>
        </div>
      </header>
    </Route>
  );
}

export default Header;