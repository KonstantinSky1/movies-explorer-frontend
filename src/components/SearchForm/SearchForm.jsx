import React from "react";

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';

function SearchForm() {
  return (
    <section className="searchForm">
      <div className="searchForm__container">
        <form>
          <div className="searchForm__search">
            <input className="searchForm__input" type="text" name="search" placeholder="Фильм" />
            <button className="searchForm__button" type="submit">Поиск</button>
          </div>

          <FilterCheckbox />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;