import React from "react";

import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div>
      <label className="filterCheckbox">
        <input
          className="filterCheckbox__input"
          type="checkbox"
          name="checkbox"
          defaultChecked
        />
        <span className="filterCheckbox__switch"></span>
      </label>
      <span className="filterCheckbox__text">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;