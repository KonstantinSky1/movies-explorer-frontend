import React from 'react';

import './SavedMovies.css';
import Preloader from '../Preloader/Preloader.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';

function SavedMovies() {
  return (
    <section className="savedMovies">
      <MoviesCardList />
      {/* <Preloader /> */}
    </section>
  );
}

export default SavedMovies;