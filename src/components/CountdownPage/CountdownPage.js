import React from 'react';
import { Card, CardActions, CardContent, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Landing from '../Landing/Landing';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
            <CardContent>
              <Typography className={classes.title} color='textSecondary' gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant='h5' component='h2'>
                Hello World
              </Typography>
              <Typography className={classes.pos} color='textSecondary'>
                adjective
              </Typography>
              <Typography variant='body2' component='p'>
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
