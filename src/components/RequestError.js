import React from 'react';

const RequestError = ({ error }) => {
  return (
    <h3 className='text-center' style={{ color: 'white' }}>{error}</h3>
  )
}

export default RequestError;
