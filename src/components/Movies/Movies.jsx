import React from 'react';

import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.jsx';
import Preloader from '../Preloader/Preloader.jsx';

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      {/* <Preloader /> */}
    </section>
  );
}

export default Movies;