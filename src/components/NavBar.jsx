import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <ul className="navigation">
      <li><img className="logo" src="https://cdn5.vectorstock.com/i/1000x1000/49/44/yoga-lotus-with-zen-circle-logo-template-vector-15844944.jpg" alt="rainbow-circle" /></li>
      <li><Link className="home" to="/">Zen Garden</Link></li>
      <li><Link className="nav-link" to="/new-plant">Share</Link></li>
      <li><Link className="nav-link" to="/about">About</Link></li>
    </ul>


  );
}
