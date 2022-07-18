import React from "react";
// import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';

function App() {
  return (
    <>
      <Header />
      {/* <Main /> */}
      {/* <Movies /> */}
      {/* <SavedMovies /> */}
      {/* <Profile /> */}
      <Register />

      <Footer />
    </>
  );
}

export default App;