import React, { Component } from 'react';
import Button from '../components/Button';

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
          <Button>Home</Button>
          <Button>What is a NEO?</Button>
          <Button>Glossary</Button>
        </nav>
      </div>
    )
  };
};

export default NavBar;
