import React from 'react';

const spinner = require('../media/spinner.svg');

const Spinner = () => {
  return (
    <div className='spinner-container'>
      <img className='spinner' src={spinner} alt='loading' />
    </div>
  )
}

export default Spinner;
