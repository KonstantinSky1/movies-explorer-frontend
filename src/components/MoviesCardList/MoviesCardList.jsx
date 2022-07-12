import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import filmList from '../../constant/constant.js';

function MoviesCardList() {
  return (
    <section className="moviesCardList">
      <div className="moviesCardList__container">
        <ul className="moviesCardList__list">
          {filmList.map(item => 
            <MoviesCard
              film={item}
              key={item.id}
            />
          )}
        </ul>
        <button
            className="moviesCardList__button-add"
            type="button"
            aria-label="Кнопка ещё"
          >
            Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;