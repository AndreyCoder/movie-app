// import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../media/logo.png'

import './Navbar.css';

export default function NavBar() {
  return (
    <header className="navbar">
      <div>
        <img
          id="logoHenry"
          src={logo}
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
      </div>
      <nav>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/" >Home</NavLink>
            <NavLink to="/favs" >Favoritas</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}