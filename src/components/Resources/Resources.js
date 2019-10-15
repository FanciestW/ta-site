import React, { Component } from 'react';
import { Divider, Grid, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import './Resources.scss';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class Resources extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
        style={{minHeight: '100vh'}}>
        <div className='list'>
          <List component="nav" aria-label="links">
            <ListSubheader component="div">Intermediate C/C++</ListSubheader>
            <ListItemLink target='_blank' href='https://unhnewhaven-my.sharepoint.com/:f:/g/personal/wlin2_unh_newhaven_edu/EiDLMHQp92ZKn82kkwNC5oEBTHzMyMQu6q-oJSh_SEIy-Q?e=AD3G14'>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="Bridge Class Lecture Slides" />
            </ListItemLink>
            <ListItemLink target='_blank' href='http://www.cplusplus.com/'>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="Applied Introductory C Programming - Textbook Link" />
            </ListItemLink>
            <ListItemLink target='_blank' href='http://eliza.newhaven.edu/apc'>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="C++ Reference Site" />
            </ListItemLink>
          </List>
        </div>
      </Grid>
    );
  }

}

export default Resources;
