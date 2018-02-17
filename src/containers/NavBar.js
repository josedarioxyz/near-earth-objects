import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  componentDidMount() {
    window.onscroll = function() {conditionallyToggleStickyClassOnNavBar()};

    const navbar = document.getElementById('navbar');

    const sticky = navbar.offsetTop;

    function conditionallyToggleStickyClassOnNavBar() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    }
  };
  render() {
    return (
      <div id='navbar-container'>
        <nav id='navbar' className='nav'>
          <NavLink className='navbar-button text-uppercase' to='/'>
            Home
          </NavLink>
          <NavLink className='navbar-button text-uppercase' to='/about-neos'>
            What is a NEO?
          </NavLink>
          <NavLink className='navbar-button text-uppercase' to='/glossary'>
            Glossary
          </NavLink>
        </nav>
      </div>
    )
  };
};

export default NavBar;
