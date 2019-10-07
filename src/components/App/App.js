import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Calendar from '../Calendar/Calendar';
import Classes from '../Classes/Classes';
import Contact from '../Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TodayIcon from '@material-ui/icons/Today';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import ContactMailIcon from '@material-ui/icons/ContactMail';
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

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const navTitles = ['Home', 'Calendar', 'Classes', 'Contact'];
    const navLinks = ['/', '/calendar', '/classes', '/contact'];
    const navIcons = [<HomeIcon key={0} />, <TodayIcon key={1} />, <SchoolIcon key={3} />, <ContactMailIcon key={4} />];
    const classNums = ['CSCI 2212 / 6610', 'CSCI 4526 / 6626', 'CSCI 4453 / 6672'];
    const classNames = ['Intermediate C/C++', 'Object Oriented Programming w/ C++', 'Android Development'];
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className='app'>
            <Navbar titles={navTitles} links={navLinks} icons={navIcons} onClick={this.test} />
            <Switch>
              <Route exact path='/'>
                <RouteHome />
              </Route>
              <Route exact path='/calendar'>
                <Calendar />
              </Route>
              <Route exact path='/classes' >
                <Classes classNames={classNames} classNums={classNums}/>
              </Route>
              <Route exact path='/contact'>
                <Contact />
              </Route>
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
