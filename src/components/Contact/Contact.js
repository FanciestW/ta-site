import React, { Component } from 'react';
import { Card, CardActions, CardContent, Divider, Grid, Button, Typography, CardMedia } from '@material-ui/core';
import './Contact.scss';

class Contact extends Component {

  render() {
    return (
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}>
        <Card className={'contact-card'}>
          <CardContent>
            <CardMedia component="img"
              alt="Picture"
              height="200"
              image="./logo192.png"
              title="Profile Picture">

            </CardMedia>
            <Typography variant="h3" component="p" align="left">
              William Lin
            </Typography>
            <Typography variant="caption" component="p" align="left">
              Computer Science Teaching Assistant
            </Typography>
            <Divider></Divider>
            
            <Typography variant="body1" component="p" align="left">
              wlin2@unh.newhaven.edu
            </Typography>

          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default Contact;
