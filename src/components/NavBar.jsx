import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav-main">

      <div className="nav-left">
        <img className="logo" src="https://cdn5.vectorstock.com/i/1000x1000/49/44/yoga-lotus-with-zen-circle-logo-template-vector-15844944.jpg" alt="zen-circle" />
        <Link to="/" className="Zen-Garden">Zen Garden</Link>
      </div>

      <div className="nav-right">

        <ul>

          <Link
            className="Share" to="/new-plant"
          >Share</Link>

          <Link
            className="About"
            to="/about"
          >About</Link>

        </ul>
      </div>
    </div>

  );
}
