import React, { Component } from 'react';
import { Container, Divider, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import './AnnouncementBar.scss';

class AnnouncementBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'orange', 'green'],
    };
  }

  render() {
    const colors = this.state.colors;
    const priority = this.props.priority || 0;
    return (
      <div className="bar"
        style={{width: '100%', backgroundColor: colors[priority]}}>
        <p style={{margin: 0}}>{this.props.title}</p>
        <p style={{margin: 0}}>{this.props.message}</p>
      </div>
    );
  }
}

AnnouncementBar.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  colors: PropTypes.array,
  priority: function(props, propName) {
    let priority = props[propName];
    
    if (priority === undefined) {
      return new Error('Sorry you must include a priority number (0-2).');
    }
    if (isNaN(priority)) {
      return new Error('Sorry the priority must be a number.');
    }
    return priority >= 1 && priority <= 3 ? null : new Error('Priority must be a number from 0-2');
  },
};

export default AnnouncementBar;
