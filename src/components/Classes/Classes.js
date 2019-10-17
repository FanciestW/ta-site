import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Grid, Paper, Typography } from '@material-ui/core';
import './Classes.scss';

class Classes extends Component {

  render() {
    const classNums = this.props.classNums || [];
    const classNames = this.props.classNames || [];
    return (
      <Grid container direction="row" className="classes-grid-container" spacing={4}>
        <Grid item xs={12} className="class-grid-item">
          <Typography variant="h2" component="h2">
            Supported Classes:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}
            direction="row"
            justify="center"
            alignItems="center">
            {classNames.map((value, index) => (
              <Grid key={value} item>
                <Paper className="class-paper-card">
                  <Typography variant="subtitle1" component="p">
                    {classNums[index]}
                  </Typography>
                  <Divider className="class-card-divider" />
                  <Typography variant="h5" component="p">
                    {value}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }

}

Classes.propTypes = {
  classNums: PropTypes.array,
  classNames: PropTypes.array,
  descriptions: PropTypes.array,
};

export default Classes;
