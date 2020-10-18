import React, { Component } from 'react';
import request from 'request-promise';
import AnnouncementBar from '../AnnouncementBar/AnnouncementBar';
import './Announcements.scss';

const ANNOUNCEMENT_SERVER = 'https://l0rrfmsv3b.execute-api.us-east-1.amazonaws.com/prod/announcements';

class Announcements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: [],
    };
    this.getAnnouncements = this.getAnnouncements.bind(this);
  }

  componentDidMount() {
    this.getAnnouncements();
  }

  getAnnouncements() {
    request({
      uri: ANNOUNCEMENT_SERVER,
      json: true,
    }).then((apiRes) => {
      this.setState({ announcements: apiRes.announcements });
    }).catch((apiErr) => {
      console.log(`Announcement API Error: ${JSON.stringify(apiErr)}`);
    });
  }

  render() {
    const announcement = this.state.announcements[0];
    return announcement ? (
      <AnnouncementBar priority={announcement.priority}
        title={announcement.title}
        message={announcement.message}/>
    ) : null;
  }
}

export default Announcements;
