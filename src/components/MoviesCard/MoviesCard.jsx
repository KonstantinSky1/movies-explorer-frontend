import React, { useState } from 'react';

import './MoviesCard.css';

function MoviesCard({ film }) {
  //временный код для вёрстки
  const [isSaved, setIsSaved] = useState(false);

  function handleClick() {
    setIsSaved(!isSaved);
  }
  //===========================

  return (
    <li className="film-card">
      <div className="film-card__imageBlock">
        <img
          className="film-card__image"
          src={film.image}
          alt={film.nameRU}
        />
      </div>

      <div className="film-card__content">
        <div className="film-card__description">
          <h2 className="film-card__title">
            {film.nameRU}
          </h2>
          <button
          onClick={handleClick}
            className={`film-card__button-save-film ${isSaved && "film-card__button-save-film_type_saved"}`}
            type="button"
            aria-label="Сохранить фильм"
          ></button>
        </div>

        <p className="film-card__duration">
          {film.duration}
        </p>
      </div>
    </li>
  );
}

export default MoviesCard;