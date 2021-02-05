import React from 'react';
import { Grid } from '@material-ui/core';
import ReactCountdown from 'react-countdown';

export default function Countdown() {
  const countdownRenderer = ({ days, hours, minutes, seconds }) => {
    return (
      <Grid container direction='row'>
        <Grid item xs={3}>
          <Grid container direction='column' alignItems='center' justify='center'>
            <Grid item xs={6}>
              {days}
            </Grid>
            <Grid item xs={6}>
              Days
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction='column' alignItems='center' justify='center'>
            <Grid item xs={6}>
              {hours}
            </Grid>
            <Grid item xs={6}>
              Hours
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction='column' alignItems='center' justify='center'>
            <Grid item xs={6}>
              {minutes}
            </Grid>
            <Grid item xs={6}>
              Minutes
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction='column' alignItems='center' justify='center'>
            <Grid item xs={6}>
              {seconds}
            </Grid>
            <Grid item xs={6}>
              Seconds
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <ReactCountdown date={new Date(2021, 2, 1, 0, 0, 0)} renderer={countdownRenderer} />
    </>
  );
}
