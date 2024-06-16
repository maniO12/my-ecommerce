import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import logo from '../Assets/logo.png';

const Navbar = () => {
  const [menu, setMenu] = useState('');
  const {getTotalItems} = useContext(ShopContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <a className="navbar-brand">
        <img
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="Logo"
        />
        {' '} Shopper 
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto custom-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setMenu('shop')}>
              Shop {menu === 'shop' && <hr className="hr1" />}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/mens" className="nav-link" onClick={() => setMenu('mens')}>
              Mens {menu === 'mens' && <hr className="hr1" />}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/womens" className="nav-link" onClick={() => setMenu('womens')}>
              Womens {menu === 'womens' && <hr className="hr1" />}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/kids" className="nav-link" onClick={() => setMenu('kids')}>
              Kids {menu === 'kids' && <hr className="hr1" />}
            </Link>
          </li> 
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item position-relative">
            <Link to="/cart" className="nav-link">
              <i className="fas fa-shopping-cart"></i>
              {getTotalItems()> 0 && (
                <span className="badge badge-danger cart-count">{getTotalItems()}</span>
              )}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="btn btn-outline-secondary text-dark">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
