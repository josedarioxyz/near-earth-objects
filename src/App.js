import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import getNeos from './utils/getNeos';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Glossary from './components/Glossary';
import Footer from './components/Footer';

const date = moment();
const dateInWords = date.format('MMMM Do, YYYY');
export const dateInNums = date.format('YYYY-MM-DD');

class App extends Component {
  componentDidMount() { this.props._getNeos(); };
  render() {
    return (
      <div id='app'>
        <Header date={dateInWords} />
        <Switch>
          <Route path='/about-neos' component={About} />
          <Route path='/glossary' component={Glossary} />
          <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => {
  return { _getNeos: () => { dispatch(getNeos()); } };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
