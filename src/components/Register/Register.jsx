import React from "react";
import { Link } from "react-router-dom";

import './Register.css';
import LogoLink from '../LogoLink/LogoLink.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <div className="register__linkToMain">
          <LogoLink />
        </div>
        <h2 className="register__title">
          Добро пожаловать!
        </h2>
        <form className="register__form" name="register-form">
          <div className="register__inputsBlock">
            <label>
              <span className="register__formLabelText">Имя</span>
              <input className="register__input" type="text" name="name" placeholder="Имя" minLength="2" required />
            </label>
            <label>
              <span className="register__formLabelText">E&#8209;mail</span>
              <input className="register__input" type="email" name="email" placeholder="E-mail" required />
            </label>
            <label>
              <span className="register__formLabelText">Пароль</span>
              <input className="register__input register__input_type_password" type="password" name="password" placeholder="Пароль" minLength="4" required />
              <ErrorMessage />
            </label>
          </div>
          <div className="register__buttonsBlock">
            <button className="register__buttonSubmit" type="submit">Зарегистрироваться</button>
            <Link to="/signin" className="register__link">
              Уже зарегистрированы?
              <span className="register__linkText">Войти</span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;