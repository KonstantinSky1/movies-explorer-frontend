import React from "react";
import { Link } from "react-router-dom";

import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">
          Привет, Виталий!
        </h2>
        <form className="profile__form" name="profile-form">
          <div className="profile__inputsBlock">
            <div className="profile__inputWrapper">
              <p className="profile__inputText">Имя</p>
              <input className="profile__input" type="text" name="name" placeholder="Имя" minLength="2" required />
            </div>
            <span className="profile__line"></span>
            <div className="profile__inputWrapper">
              <p className="profile__inputText">E&#8209;mail</p>
              <input className="profile__input" type="text" name="email" placeholder="E&#8209;mail" required />
            </div>
          </div>
          <div className="profile__buttonsBlock">
            <button className="profile__buttonSubmit" type="submit">Редактировать</button>
            <Link to="/" className="profile__logOutLink">
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;