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
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className='app'>
            <Navbar titles={navTitles} links={navLinks} icons={navIcons} onClick={this.test} />
            <Switch>
              <Route exact path='/'>
                <RouteHome />
              </Route>
              <Route exact path='/calendar' component={Calendar} />
              <Route exact path='/classes' component={Classes} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
