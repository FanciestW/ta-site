import React, { Component } from 'react';
import { Card, CardContent, Divider, Grid, Link, Typography, CardMedia } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import profile_pic from './profile_pic.jpg';
import './Contact.scss';

class Contact extends Component {

  render() {
    return (
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '90vh' }}>
        <Card className={'contact-card'}>
          <CardMedia component="img"
            alt="Picture"
            height="250"
            image={profile_pic}
            title="Profile Picture"/>
          <CardContent>
            <Typography variant="h3" component="p" align="left">
              William Lin
            </Typography>
            <Typography variant="subtitle1" component="p" align="left">
              Computer Science Teaching Assistant
            </Typography>
            <Divider className="card-divider"/>
            <Typography variant="body1" component="p" align="left" className="contact-info">
              <EmailIcon className="icons"/>
              <Link href="mailto:wlin2@unh.newhaven.edu" color="inherit" className="contact-link">
                wlin2@unh.newhaven.edu
              </Link>
            </Typography>
            <Typography variant="body1" component="p" align="left" className="contact-info">
              <PhoneIphoneIcon className="icons"/>
              <Link href="sms:917-444-5340" color="inherit" className="contact-link">
                (917) 444-5340
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default Contact;
