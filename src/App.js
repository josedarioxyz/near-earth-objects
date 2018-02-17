import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import getNeos from './utils/getNeos';
import Header from './components/Header';
import Home from './components/Home';

const date = moment();
const dateInWords = date.format('MMMM Do, YYYY');
export const dateInNums = date.format('YYYY-MM-DD');

class App extends Component {
  componentDidMount() { this.props._getNeos(); };
  render() {
    const { error, hasRequested, neos } = this.props;
    return (
      <div id='app'>
        <Header date={dateInWords} />
        <Home error={error} hasRequested={hasRequested} neos={neos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { error, hasRequested, neos } = state.neosReducer;
  return { error, hasRequested, neos };
}

const mapDispatchToProps = (dispatch) => {
  return {
    _getNeos: () => { dispatch(getNeos()); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
