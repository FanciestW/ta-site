import React, { Component } from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

class Contact extends Component {

  render() {
    return (
      <Card className={'contact-card'}>
        <CardContent>
          <Typography variant={'h2'} component={'p'}>
            William Lin
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Contact;
