import React, { Component } from 'react';
import { Button, Card, CardActions, CardContent, Divider, Grid, Typography, ButtonBase } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Home.scss';

class Home extends Component {

  render() {
    const icons = this.props.icons;
    const actions = this.props.actions;
    const descs = this.props.descs;
    const linkTitles = this.props.linkTitles;
    const links = this.props.links;
    return (
      <div className="home-div">
        <Typography variant="h2" component="h2">Welcome to my TA Website!</Typography>
        <Typography variant="h5" component="h5">
          What brings you here?
        </Typography>
        <Grid container>
          <Grid item xs={12}>
            <Grid container spacing={2} className="class-card-grid"
              direction="row"
              justify="center"
              alignItems="center">
              {actions.map((value, index) => (
                <Grid key={value} item>
                  <Card className="home-paper-card">
                    <ButtonBase className="button-base" 
                      onClick={() => {this.props.history.push(links[index]);}}>
                      <CardContent>
                        {icons[index]}
                        <Typography variant="subtitle1" component="p">
                          {value}
                        </Typography>
                        <Divider className="class-card-divider" />
                        <Typography variant="h5" component="p" className="desc">
                          {descs[index]}
                        </Typography>
                      </CardContent>
                    </ButtonBase>
                    <CardActions>
                      <Button className="button-link"
                        href={links[index]}
                        color="inherit"
                        size="small">
                        {linkTitles[index]}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  icons: PropTypes.array,
  actions: PropTypes.array,
  descs: PropTypes.array,
  linkTitles: PropTypes.array,
  links: PropTypes.array,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Home);
