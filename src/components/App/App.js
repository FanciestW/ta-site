import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Calendar from '../Calendar/Calendar';
import './App.scss';
require('dotenv').config();


class App extends Component {

  render() {
    return (
      <div className='app'>
        <Navbar title='Calendar' />
        <Calendar />
      </div>
    );
  }
}

export default App;
