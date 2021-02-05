import React from 'react';
import { Card, CardActions, CardContent, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Landing from '../Landing/Landing';

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    maxWidth: 600,
    width: '60vw',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CountdownPage() {
  const classes = useStyles();
  return (
    <div>
      <Landing />
      <Grid
        container
        spacing={2}
        direction='column'
        alignItems='center'
        justify='center'
        style={{ minHeight: '100vh' }}
      >
        <Grid item x2={12}>
          <Card className={classes.root}>
            <CardContent style={{ textAlign: 'center'}}>
              <Typography variant='h5' component='h2'>
                Time Left:
              </Typography>
              <Grid container direction='row'>
                <Grid item xs={3}>
                  <Grid container direction='column' alignItems='center' justify='center'>
                    <Grid item xs={6}>
                      12
                    </Grid>
                    <Grid item xs={6}>
                      Days
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container direction='column' alignItems='center' justify='center'>
                    <Grid item xs={6}>
                      23
                    </Grid>
                    <Grid item xs={6}>
                      Hours
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container direction='column' alignItems='center' justify='center'>
                    <Grid item xs={6}>
                      59
                    </Grid>
                    <Grid item xs={6}>
                      Minutes
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container direction='column' alignItems='center' justify='center'>
                    <Grid item xs={6}>
                      30
                    </Grid>
                    <Grid item xs={6}>
                      Seconds
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Typography variant='body2' component='p' style={{ overflow: 'wrap'}}>
                I have graduated from UNH. I am no longer a teach assistant.<br/>
                For that reason, this website will soon be taken down.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' href='/home'>Continue to Site</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
