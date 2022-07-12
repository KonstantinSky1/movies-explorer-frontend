import React from 'react';

import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
      {/* <Preloader /> */}
    </section>
  );
}

export default Movies;