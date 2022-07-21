import React from 'react';

import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';

function SavedMovies() {
  return (
    <section className="savedMovies">
      <SearchForm />
      <MoviesCardList />
      {/* <Preloader /> */}
    </section>
  );
}

export default SavedMovies;