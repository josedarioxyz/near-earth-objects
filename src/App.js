import React, { Component } from 'react';
import Header from './components/Header';
import Item from './components/Item';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <Header />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    );
  }
}

export default App;
