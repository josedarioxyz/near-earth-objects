import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import getNeos from './utils/getNeos';
import Header from './components/Header';
import Item from './components/Item';
import Spinner from './components/Spinner';

const date = moment();
const dateInWords = date.format('MMMM Do, YYYY');
export const dateInNums = date.format('YYYY-MM-DD');

class App extends Component {
  componentDidMount() { this.props._getNeos(); };
  render() {
    const { error, isFetching, neos } = this.props;
    return (
      <div id='app'>
        <Header date={dateInWords} />
        {
          error ?
          <h3 className='text-center' style={{ color: 'white' }}>{error}</h3> :
          isFetching ?
          <Spinner /> :
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
