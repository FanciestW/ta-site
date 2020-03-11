import React, { Component } from 'react';
import { Grid, IconButton, Typography } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import WarningIcon from '@material-ui/icons/Warning';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import CancelIcon from '@material-ui/icons/Cancel';
import PropTypes from 'prop-types';
import './AnnouncementBar.scss';

class AnnouncementBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: false,
      colors: ['red', 'orange', 'green'],
      icons: [<ErrorIcon key={0} fontSize='large' />, <WarningIcon key={1} fontSize='large' />, <NotificationImportantIcon key={2} fontSize='large' />],
    };
  }

  render() {
    const icons = this.props.icons || this.state.icons;
    const colors = this.props.colors || this.state.colors;
    const priority = this.props.priority || 0;
    return this.state.closed ? null : (
      <div className="bar"
        style={{backgroundColor: colors[priority] }}>
        <Grid container
          spacing={2}
          justify='center'
          alignItems='center'>
          <Grid item xs>
            {icons[priority]}
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1} direction='column'>
              <Grid className='announcement-text' item xs>
                <Typography variant='h6'
                  component='h6'
                  align='left'
                  display='block'
                  style={{ margin: 0, padding: 0 }}>
                  {this.props.title}
                </Typography>
              </Grid>
              <Grid className='announcement-text' item xs>
                <Typography variant='body1'
                  component='p'
                  align='left'
                  display='block'
                  style={{ margin: 0, padding: 0 }}>
                  {this.props.message}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs align='center'>
            <IconButton onClick={() => {this.setState({closed: true});}} >
              <CancelIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    );
  }
}

AnnouncementBar.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  colors: PropTypes.array,
  icons: PropTypes.array,
  priority: function (props, propName) {
    let priority = props[propName];

    if (priority === undefined) {
      return new Error('Sorry you must include a priority number (0-2).');
    }
    if (isNaN(priority)) {
      return new Error('Sorry the priority must be a number.');
    }
    return priority >= 0 && priority <= 2 ? null : new Error('Priority must be a number from 0-2');
  },
};

export default AnnouncementBar;
