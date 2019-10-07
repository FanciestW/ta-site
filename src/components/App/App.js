import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Calendar from '../Calendar/Calendar';
import Contact from '../Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.scss';
require('dotenv').config();

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function RouteHome() {
  return <h2>Home</h2>;
}

function RouteCalendar() {
  return <Calendar />;
}

function RouteResource() {
  return <h2>Resource</h2>;
}

function RouteContact() {
  return <Contact />;
}


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className='app'>
            <Navbar title='Calendar' />
            <Switch>
              <Route exact path='/'>
                <RouteHome />
              </Route>
              <Route exact path='/calendar' component={Calendar} />
              <Route exact path='/resources'>
                <RouteResource />
              </Route>
              <Route exact path='/contact'>
                <RouteContact />
              </Route>
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
