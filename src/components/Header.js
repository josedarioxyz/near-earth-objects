import React from 'react';
import NavBar from '../containers/NavBar';
import Divider from './Divider';

const Header = ({ date }) => {
  return (
    <div id='header' className="jumbotron jumbotron-fluid">
      <div className="container">
        <h6 className='text-right'>api.nasa.gov</h6>
        <Divider />
        <h4 className='header-date text-uppercase'>{date}</h4>
        <h1 className="text-uppercase">Near Earth Objects</h1>
        <p className="lead">
          NASA information about detected Near Earth Objects (NEOs) making their
          closest approach today.
        </p>
        <Divider />
        <NavBar />
      </div>
    </div>
  )
}

export default Header;
