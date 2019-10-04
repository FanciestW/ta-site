import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import TodayIcon from '@material-ui/icons/Today';
import HomeIcon from '@material-ui/icons/Home';
import ComputerIcon from '@material-ui/icons/Computer';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import './Navbar.scss';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const toggleDrawer = () => {
      if (this.state.open) {
        this.setState({ open: false });
      } else {
        this.setState({ open: true });
      }
    };

    const sideList = (
      <div className={'side-list'}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}>
        <List>
          {['Home', 'Calendar', 'Resources', 'Contact Me'].map((text, index) => (
            <ListItem button key={text} className='drawer-list-item'>
              <ListItemIcon className='drawer-icon'>{[<HomeIcon key={0}/>, <TodayIcon key={0}/>, <ComputerIcon key={0}/>, <ContactMailIcon key={0}/>][index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon  />
          </IconButton>
          <Typography variant="h6">{this.props.title || 'Title'}</Typography>
        </Toolbar>
        <SwipeableDrawer open={this.state.open} onOpen={toggleDrawer} onClose={toggleDrawer} className='side-drawer'>
          {sideList}
        </SwipeableDrawer>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string
};

export default Navbar;
