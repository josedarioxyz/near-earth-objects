import React from 'react';
import NavBar from '../containers/NavBar';
import Divider from './Divider';

const Header = () => {
  return (
    <div id='header' className="jumbotron jumbotron-fluid">
      <div className="container">
      <Divider />
      <h4 className='header-date text-uppercase'>FEBRUARY 14th, 2018</h4>
      <h1 className="text-uppercase">Near Earth Objects</h1>
      <p className="lead">
        NASA information about Near Earth Objects (NEOs) making their closest
        approach today.
      </p>
      <Divider />
      <NavBar />
      </div>
    </div>
  )
}

export default Header;
