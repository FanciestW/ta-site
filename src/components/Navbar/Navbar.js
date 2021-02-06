import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  SwipeableDrawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
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
    const location = this.props.location;
    const history = this.props.history;
    const titles = this.props.titles;
    const links = this.props.links;
    const icons = this.props.icons;
    const title = titles[links.indexOf(location.pathname)];
    const sideList = (
      <div
        className={'side-list'}
        role='presentation'
        onClick={this.handleToggleDrawer}
        onKeyDown={this.handleToggleDrawer}
      >
        <Router></Router>
        <List>
          {titles.map((text, index) => (
            <Link to={links[index]} key={index} style={{ color: 'inherit', textDecoration: 'none' }}>
              <ListItem button className={'drawer-list-item'}>
                <ListItemIcon className={'drawer-icon'}>{icons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );

    if (!Cookie.get('seenNotice')) {
      history.push(encodeURI(`/landing?redirect=${location.pathname}`));
    }

    return (
      <AppBar position='static'>
        {/* {Cookie.get('seenNotice') ? null : <Redirect push to='/landing' />} */}
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu' onClick={this.handleToggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'>{title || 'TA William'}</Typography>
          <div className='right'>
            <IconButton color='inherit' onClick={this.props.themeHandler}>
              {this.props.themeIsDark ? <BrightnessHighIcon /> : <Brightness4Icon />}
            </IconButton>
          </div>
        </Toolbar>
        <SwipeableDrawer
          open={this.state.open}
          onOpen={this.handleToggleDrawer}
          onClose={this.handleToggleDrawer}
          className={'side-drawer'}
        >
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
  history: PropTypes.object,
};

export default withRouter(Navbar);
