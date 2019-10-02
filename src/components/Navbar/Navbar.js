import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{this.props.title || 'Title'}</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string
};

export default Navbar;
