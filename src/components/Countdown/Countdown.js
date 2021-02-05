import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ReactCountdown from 'react-countdown';

export default function Countdown(props) {
  // eslint-disable-next-line react/prop-types
  const countdownRenderer = ({ days, hours, minutes, seconds }) => {
    return (
      <Grid container direction='row'>
        <Grid item xs={3}>
          <Grid container direction='column' alignItems='center' justify='center'>
            <Grid item xs={6}>
              <Typography variant='h3'>{days}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='subtitle1'>Days</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction='column' alignItems='center' justify='center'>
            <Grid item xs={6}>
              <Typography variant='h3'>{hours}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='subtitle1'>Hours</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction='column' alignItems='center' justify='center'>
            <Grid item xs={6}>
              <Typography variant='h3'>{minutes}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='subtitle1'>Minutes</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction='column' alignItems='center' justify='center'>
            <Grid item xs={6}>
              <Typography variant='h3'>{seconds}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='subtitle1'>Seconds</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <ReactCountdown date={props.date || new Date(2021, 2, 1, 0, 0, 0)} renderer={countdownRenderer} />
    </>
  );
}
