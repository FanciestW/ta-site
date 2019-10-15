import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Calendar from '../Calendar/Calendar';
import Resources from '../Resources/Resources';
import Classes from '../Classes/Classes';
import Contact from '../Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TodayIcon from '@material-ui/icons/Today';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import './App.scss';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const homeIcons = [<TodayIcon key={1} />, <CloudDownloadIcon key={2} />, <SchoolIcon key={3} />, <ContactMailIcon key={4} />];
    const homeActions = ['Office Hour Calendar', 'Student Resources', 'Supported Classes', 'Contact Info'];
    const homeDescs = ['Need to Check Office Hours?', 'Looking for resources like lecture notes and helpful links?', 'Checking what classes I am the TA for?', 'Looking for contact information?'];
    const homeLinkTitles = ['View Calendar', 'See Resources', 'Check Supported Classes', 'Get My Contact Info'];
    const homeLinks = ['/calendar', '/resources', '/classes', '/contact'];
    const navTitles = ['Home', 'Calendar', 'Resources', 'Classes', 'Contact'];
    const navLinks = ['/', '/calendar', '/resources', '/classes', '/contact'];
    const navIcons = [<HomeIcon key={0} />, <TodayIcon key={1} />, <CloudDownloadIcon key={2} />, <SchoolIcon key={3} />, <ContactMailIcon key={4} />];
    const classNums = ['CSCI 2212 / 6610', 'CSCI 4526 / 6626', 'CSCI 4453 / 6672'];
    const classNames = ['Intermediate C/C++', 'Object Oriented Programming w/ C++', 'Android Development'];
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className='app'>
            <Navbar titles={navTitles} links={navLinks} icons={navIcons} onClick={this.test} />
            <Switch>
              <Route exact path='/'>
                <Home icons={homeIcons} actions={homeActions} descs={homeDescs} linkTitles={homeLinkTitles} links={homeLinks} />
              </Route>
              <Route exact path='/calendar'>
                <Calendar />
              </Route>
              <Route exact path='/resources'>
                <Resources />
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
