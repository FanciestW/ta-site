import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

export default function Countdown() {
  const [counterSeconds, setCounterSecounds] = useState(0);
  const [counterMinutes, setCounterMinutes] = useState(0);
  const [counterHours, setCounterHours] = useState(0);
  const [counterDays, setCounterDays] = useState(0);

  return (
    <>
      <Grid container direction='row'>
        <Grid item xs={3}>
          <Grid container direction='column' alignItems='center' justify='center'>
            <Grid item xs={6}>
              {counterDays}
            </Grid>
            <Grid item xs={6}>
              Days
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction='column' alignItems='center' justify='center'>
            <Grid item xs={6}>
              {counterHours}
            </Grid>
            <Grid item xs={6}>
              Hours
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction='column' alignItems='center' justify='center'>
            <Grid item xs={6}>
              {counterMinutes}
            </Grid>
            <Grid item xs={6}>
              Minutes
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction='column' alignItems='center' justify='center'>
            <Grid item xs={6}>
              {counterSeconds}
            </Grid>
            <Grid item xs={6}>
              Seconds
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
