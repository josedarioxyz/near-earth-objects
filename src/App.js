import React, { Component } from 'react';
import { connect } from 'react-redux';
import getNeos from './utils/getNeos';
import Header from './components/Header';
import Item from './components/Item';

class App extends Component {
  componentDidMount() { this.props._getNeos(); };
  render() {
    const { error, isFetching, neos } = this.props;
    return (
      <div id='app'>
        <Header />
        {
          error ?
          <h3 className='text-center' style={{ color: 'white' }}>{error}</h3> :
          isFetching ?
          <h3 className='text-center' style={{ color: 'white' }}>Fetching...</h3> :
          neos ?
          neos.map((neo, key) => <Item neo={neo} key={key} />) :
          <h3 className='text-center' style={{ color: 'white' }}>Waiting...</h3>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { error, isFetching, neos } = state.neosReducer;
  return { error, isFetching, neos };
}

const mapDispatchToProps = (dispatch) => {
  return {
    _getNeos: () => {
      dispatch(getNeos());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
