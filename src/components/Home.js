import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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
  );
};

const mapStateToProps = (state) => {
  const { error, hasRequested, neos } = state.neosReducer;
  return { error, hasRequested, neos };
};

export default withRouter(connect(mapStateToProps)(Home));
