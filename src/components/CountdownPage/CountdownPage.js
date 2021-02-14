import React, { useEffect } from 'react';
import Cookie from 'js-cookie';
import { useLocation } from 'react-router-dom';
import { Card, CardActions, CardContent, Container, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NetBackground from '../NetBackground/NetBackground';
import Countdown from '../Countdown/Countdown';

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    maxWidth: 600,
    width: '60vw',
    padding: 10,
    backgroundColor: '#2B2496',
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

  useEffect(() => {
    Cookie.set('seenNotice', true, { expires: 1 });
  }, []);

  const redirectUri = new URLSearchParams(useLocation().search).get('redirect') || '/home';

  return (
    <div>
      <NetBackground />
      <Grid container direction='column' alignItems='center' justify='center' style={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardContent style={{ textAlign: 'center' }}>
              <Typography variant='h4'>Website Time Left:</Typography>
              <Container style={{ margin: '20px 0px' }}>
                <Countdown />
              </Container>
              <Typography variant='body2' component='p' style={{ overflow: 'wrap', padding: 10 }}>
                I am no longer a teaching assistant because I have graduated from UNH.
                For that reason, this website will be taken down at the end of this countdown.
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button size='small' href={redirectUri}>
                Continue to Site
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
