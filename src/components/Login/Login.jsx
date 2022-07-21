import React from "react";
import { Link } from "react-router-dom";

import './Login.css';
import LogoLink from '../LogoLink/LogoLink.jsx';

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <div className="login__linkToMain">
          <LogoLink />
        </div>
        <h2 className="login__title">
          Рады видеть!
        </h2>
        <form className="login__form" name="login-form">
          <div className="login__inputsBlock">
            <label>
              <span className="login__formLabelText">E&#8209;mail</span>
              <input className="login__input" type="email" name="email" placeholder="E-mail" required />
            </label>
            <label>
              <span className="login__formLabelText">Пароль</span>
              <input className="login__input login__input_type_password" type="password" name="password" placeholder="Пароль" minLength="4" required />
            </label>
          </div>
          <div className="login__buttonsBlock">
            <button className="login__buttonSubmit" type="submit">Войти</button>
            <Link to="/signup" className="login__link">
              Ещё не зарегистрированы?
              <span className="login__linkText">Регистрация</span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;