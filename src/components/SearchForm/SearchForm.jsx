import React from "react";

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';

function SearchForm() {
  return (
    <section className="searchForm">
      <div className="searchForm__container">
        <form name="search-form">
          <div className="searchForm__search">
            <input className="searchForm__input" type="text" name="search" placeholder="Фильм" minLength="2" required />
            <button className="searchForm__button" type="submit">Поиск</button>
          </div>

          <FilterCheckbox />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;