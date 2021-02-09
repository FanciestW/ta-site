import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TodayIcon from '@material-ui/icons/Today';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import CountdownPage from '../CountdownPage/CountdownPage';
import Navbar from '../Navbar/Navbar';
import Announcements from '../Announcements/Announcements';
import Home from '../Home/Home';
import Calendar from '../Calendar/Calendar';
import Resources from '../Resources/Resources';
import Classes from '../Classes/Classes';
import Contact from '../Contact/Contact';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.state = {
      theme: createMuiTheme({
        palette: {
          type: localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
        },
      }),
    };
  }

  handleThemeChange() {
    const type = this.state.theme.palette.type === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', type);
    this.setState({
      theme: createMuiTheme({
        palette: {
          type,
        },
      }),
    });
  }

  render() {
    const theme = this.state.theme;
    const homeIcons = [
      <TodayIcon key={1} />,
      <CloudDownloadIcon key={2} />,
      <SchoolIcon key={3} />,
      <ContactMailIcon key={4} />,
    ];
    const homeActions = ['Office Hour Calendar', 'Student Resources', 'Supported Classes', 'Contact Info'];
    const homeDescs = [
      'Need to Check Office Hours?',
      'Looking for resources like lecture notes and helpful links?',
      'Checking what classes I am the TA for?',
      'Looking for contact information?',
    ];
    const homeLinkTitles = ['View Calendar', 'See Resources', 'Check Supported Classes', 'Get My Contact Info'];
    const homeLinks = ['/calendar', '/resources', '/classes', '/contact'];
    const navTitles = ['Home', 'Calendar', 'Resources', 'Classes', 'Contact'];
    const navLinks = ['/home', '/calendar', '/resources', '/classes', '/contact'];
    const navIcons = [
      <HomeIcon key={0} />,
      <TodayIcon key={1} />,
      <CloudDownloadIcon key={2} />,
      <SchoolIcon key={3} />,
      <ContactMailIcon key={4} />,
    ];
    const classNums = ['CSCI 2212 / 6610', 'CSCI 4536 / 6636', 'CSCI 3351 / 6651'];
    const classNames = ['Intermediate C/C++', 'Structure of Programming Languages', 'Script Programming/Python'];
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path='/landing' component={CountdownPage} />
            <Route exact path="/404" component={NotFoundPage} />
            <Route>
              <div className='app'>
                <Navbar
                  themeIsDark={theme.palette.type === 'dark'}
                  titles={navTitles}
                  links={navLinks}
                  icons={navIcons}
                  themeHandler={this.handleThemeChange}
                />
                <Announcements />
                <Switch>
                  <Route exact path='/home'>
                    <Home
                      icons={homeIcons}
                      actions={homeActions}
                      descs={homeDescs}
                      linkTitles={homeLinkTitles}
                      links={homeLinks}
                    />
                  </Route>
                  <Route exact path='/calendar' component={Calendar} />
                  <Route exact path='/resources' component={Resources} />
                  <Route exact path='/classes'>
                    <Classes classNames={classNames} classNums={classNums} />
                  </Route>
                  <Route exact path='/contact' component={Contact} />
                  <Route>
                    <Redirect to='/404' />
                  </Route>
                </Switch>
              </div>
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
