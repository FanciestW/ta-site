import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Grid, Paper, Typography } from '@material-ui/core';
import './Classes.scss';

class Classes extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const classNums = this.props.classNums || [];
    const classNames = this.props.classNames || [];
    return (
      <Grid container direction="row" className="classes-grid-container" spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" component="p">
            Supported Classes:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} className="class-card-grid"
            direction="row"
            justify="center"
            alignItems="center">
            {classNames.map((value, index) => (
              <Grid key={value} item>
                <Paper className="paper-card">
                  <Typography variant="subtitle" component="p">
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
