import React, { Component } from 'react';
import { Divider, Grid, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Resources.scss';

function ListItemLink(props) {
  return <ListItem button className="list-link" component="a" {...props} />;
}

class Resources extends Component {

  render() {
    return (
      <Grid container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
        style={{ minHeight: 'calc(100vh - 56px)' }}>
        <Paper className='list'>
          <List component="nav" aria-label="links">
            <ListSubheader component="div">Intermediate C/C++</ListSubheader>
            <ListItemLink target='_blank' href='https://unhnewhaven-my.sharepoint.com/:f:/g/personal/wlin2_unh_newhaven_edu/EiDLMHQp92ZKn82kkwNC5oEBYfV397KcxuRY-x8fLgs8VA?e=qvnHgy'>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="Bridge Class Lecture Slides" />
            </ListItemLink>
            <ListItemLink target='_blank' href='https://unhnewhaven-my.sharepoint.com/:f:/g/personal/wlin2_unh_newhaven_edu/EsnfV4f5RbFHuxxClOumJJMBNuzB_D-HMFqBEfBlCKWsmQ?e=puUopC'>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="Bridge Class Zoom Recordings" />
            </ListItemLink>
            <ListItemLink target='_blank' href='http://eliza.newhaven.edu/apc'>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="Applied Introductory C Programming - Textbook Link" />
            </ListItemLink>
            <ListItemLink target='_blank' href='http://www.cplusplus.com/'>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="C++ Reference Site" />
            </ListItemLink>
            <Divider />
            <ListSubheader component="div">Other Classes</ListSubheader>
            <ListItemLink target='_blank' href='http://eliza.newhaven.edu/cpp/'>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="Adv. / Object Oriented C++ Website" />
            </ListItemLink>
            <ListItemLink target='_blank' href='http://eliza.newhaven.edu/sysprog/'>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="Systems Programming Website" />
            </ListItemLink>
            <ListItemLink target='_blank' href='http://eliza.newhaven.edu/lang/'>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="Structure of Programming Languages Website" />
            </ListItemLink>
            <ListItemLink target='_blank' href='http://eliza.newhaven.edu/datastrG/'>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="Data Structures Website" />
            </ListItemLink>
            <Divider />
            <ListSubheader component="div">Miscellaneous</ListSubheader>
            <ListItemLink target='_blank' href='https://github.com/Pitt-CSC/Summer2021-Internships'>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="List of Summer 2021 Tech Internships" />
            </ListItemLink>
            <ListItemLink target='_blank' href='https://github.com/Pitt-CSC/NewGrad-2021'>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="List of 2021 New Grad Tech Roles" />
            </ListItemLink>
            <ListItemLink target='_blank' href='https://education.github.com/pack/offers'>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="GitHub Education Pack" />
            </ListItemLink>
            <ListItemLink target='_blank' href='https://github.com/OpenGenus/Best-student-discount-services'>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="List of Various Student Discounts" />
            </ListItemLink>
            <ListItemLink target='_blank' href='https://github.com/AchoArnold/discount-for-student-dev'>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="Student Discounts on Developer Tools" />
            </ListItemLink>
          </List>
        </Paper>
      </Grid>
    );
  }

}

export default Resources;
