import React from 'react';
import Spinner from './Spinner';
import RequestError from './RequestError';
import Item from './Item';

const Home = ({ error, hasRequested, neos }) => {
  return (
    <div id='home'>
      {
        !hasRequested ? <Spinner /> :
        error ? <RequestError error={error} /> :
        neos.map((neo, key) => <Item neo={neo} key={key} />)
      }
    </div>
  )
}

export default Home;
