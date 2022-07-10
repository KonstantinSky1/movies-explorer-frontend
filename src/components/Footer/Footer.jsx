import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__content">
          <p className="footer__copyright">© {new Date().getFullYear()}</p>
          <ul className="footer__links">
            <li className="footer__linkItem">
              <a className="footer__link" href="https://practicum.yandex.ru" target="_blank">Яндекс.Практикум</a>
            </li>
            <li>
              <a className="footer__link" href="https://github.com/KonstantinSky1?tab=repositories" target="_blank">Github</a>
            </li>
            <li>
              <a className="footer__link" href="https://www.codewars.com/users/KonstantinSky/completed" target="_blank">Codewars</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;