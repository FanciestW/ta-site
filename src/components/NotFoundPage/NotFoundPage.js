import React from 'react';
import { Grid, Card, CardContent, Container, Typography, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NetBackground from '../NetBackground/NetBackground';


const useStyles = makeStyles({
  root: {
    minWidth: 400,
    maxWidth: 600,
    width: '60vw',
    padding: 10,
    backgroundColor: '#2B2496',
  },
});

export default function NotFoundPage() {
  const classes = useStyles();
  return (
    <div>
      <NetBackground />
      <Grid container direction='column' alignItems='center' justify='center' style={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardContent style={{ textAlign: 'center' }}>
              <Typography variant='h4'>Website Time Left:</Typography>
              <Container style={{ margin: '20px 0px' }}>
                <Typography variant='h2'>404</Typography>
              </Container>
              <Typography variant='body2' component='p' style={{ overflow: 'wrap', padding: 10 }}>
                You've found a bad link, please return the site.
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button size='small' href='/home'>
                Back to Site
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}