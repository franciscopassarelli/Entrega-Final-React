import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="NavBar">
      <Link to='/'>
        <h3> FranTenis</h3>
      </Link>
      <div className={`Categories ${showMenu ? 'active' : ''}`}>
        
        <NavLink to={`/category/raquetas`} activeClassName="ActiveOption" className="Option">Raquetas</NavLink>
        <NavLink to={`/category/indumentaria`} activeClassName="ActiveOption" className="Option">Indumentaria</NavLink>
        <NavLink to={`/category/accesorios`} activeClassName="ActiveOption" className="Option">Accesorios</NavLink>
    
        <CartWidget />

  
      </div>
      <div className="Menu-btn" onClick={toggleMenu}>
        <div className={`menu-icon ${showMenu ? 'open' : ''}`}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
