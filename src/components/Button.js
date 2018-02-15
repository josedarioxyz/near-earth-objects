import React from 'react';

const Button = (props) => {
  return (
    <button className='button text-uppercase'>
      {props.children}
    </button>
  )
}

export default Button;
