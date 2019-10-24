import React, { Component } from 'react';
import request from 'request-promise';
import AnnouncementBar from '../AnnouncementBar/AnnouncementBar';
import './Announcements.scss';

const ANNOUNCEMENT_SERVER = 'https://xazbttr8qi.execute-api.us-east-1.amazonaws.com/dev/announcements';

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
      console.log(apiRes.announcements);
      this.setState({ announcements: apiRes.announcements });
    }).catch((apiErr) => {
      console.log(`Announcement API Error: ${JSON.stringify(apiErr)}`);
    });
  }

  render() {
    const announcement = this.state.announcements[0];
    return announcement ? (
      <div>
        <AnnouncementBar priority={announcement.priority}
          title={announcement.title}
          message={announcement.message}/>
      </div>
    ) : null;
  }
}

export default Announcements;
