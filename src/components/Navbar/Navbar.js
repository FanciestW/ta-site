import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
  }

  handleToggleDrawer() {
    if (this.state.open) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true });
    }
  }

  render() {
    const titles = this.props.titles;
    const links = this.props.links;
    const icons = this.props.icons;
    const title = titles[links.indexOf(this.props.location.pathname)];
    const sideList = (
      <div className={'side-list'}
        role="presentation"
        onClick={this.handleToggleDrawer}
        onKeyDown={this.handleToggleDrawer}>
        <Router></Router>
        <List>
          {titles.map((text, index) => (
            <Link to={links[index]}
              key={index}
              style={{ color: 'inherit', textDecoration: 'none' }}>
              <ListItem button className={'drawer-list-item'}>
                <ListItemIcon className={'drawer-icon'}>{icons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.handleToggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{title || 'Missing Title'}</Typography>
          <div className="right">
            <IconButton color="inherit" onClick={this.props.themeHandler}>
              {this.props.themeIsDark ? <BrightnessHighIcon /> : <Brightness4Icon />}
            </IconButton>
          </div>
        </Toolbar>
        <SwipeableDrawer open={this.state.open} onOpen={this.handleToggleDrawer} onClose={this.handleToggleDrawer} className={'side-drawer'}>
          {sideList}
        </SwipeableDrawer>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string,
  titles: PropTypes.array,
  links: PropTypes.array,
  icons: PropTypes.array,
  themeIsDark: PropTypes.bool,
  themeHandler: PropTypes.func,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Navbar);
