import React from 'react';
import './App.css';
import {ReactComponent as NasaLogo} from './NasaLogo-96.svg'

function Navbar() {
  return (
    <>
      <header>
        <div className="navbar__background">
          <div className="logo__title">
            <NasaLogo id='nasa__logo'/>
            <h3>Astronomy Picture of the Day</h3>
          </div>
          <div className="nav__links">
            <ul><li><a href="#">Home</a></li></ul>
            <ul><li><a href="#">News</a></li></ul>
          </div>
        </div>
      </header>
    </>
  )
}

function App() {
  return (
    <Navbar />
  );
}

export default App;