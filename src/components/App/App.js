import React, { Component } from 'react';
import Calendar from '../Calendar/Calendar';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

class App extends Component {

  render() {
    return (
      <div className='app'>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start"color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              Calendar
            </Typography>
          </Toolbar>
        </AppBar>
        <Calendar />
      </div>
    );
  }
}

export default App;
