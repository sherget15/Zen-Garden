import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>

      <div className="left-nav">
        <Link className="home" to="/"><h4>Zen Garden</h4></Link>
      </div>

      <div className="right-nav">
        <Link className="nav-link" to="/new-plant">Share</Link>
        <Link className="nav-link" to="/about">About</Link>
      </div>

    </div>
  )
}

