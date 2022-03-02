import React from "react";
import './Navbar.css'
import {ReactComponent as NasaLogo} from '../../static/NasaLogo-96.svg'

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
              <ul><li><a href="#latest__news">News</a></li></ul>
            </div>
          </div>
        </header>
      </>
    )
}

export default Navbar;