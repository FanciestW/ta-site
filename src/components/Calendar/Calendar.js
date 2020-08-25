import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import request from 'request-promise';
import { PopupWidget } from 'react-calendly';
import './Calendar.scss';

const EVENTS_SERVER = 'https://xazbttr8qi.execute-api.us-east-1.amazonaws.com/dev/events';

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth, height: window.innerHeight, events: [] };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.getCalendarEvents = this.getCalendarEvents.bind(this);
    this.calendarRef = React.createRef();
  }

  componentDidMount() {
    this.getCalendarEvents();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.calendarRef.current.getApi().changeView(this.state.width <= 500 ? 'timeGridDay' : 'timeGridWeek');
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (this.state.width !== window.innerWidth) {
      this.calendarRef.current.getApi().changeView(this.state.width <= 500 ? 'timeGridDay' : 'timeGridWeek');
    }
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  getCalendarEvents() {
    request({
      uri: EVENTS_SERVER,
      json: true,
    }).then((eventsRes) => {
      this.setState({ events: eventsRes.events });
    }).catch((eventsErr) => {
      console.log(`Events API Error: ${JSON.stringify(eventsErr)}`);
    });
  }

  render() {
    const themeIsLight = localStorage.getItem('theme') === 'light';
    return (
      <div className='calendar-view' style={{ marginTop: '2rem' }}>
        <FullCalendar ref={this.calendarRef}
          firstDay={0}
          allDaySlot={true}
          defaultView="timeGridWeek"
          weekends={true}
          minTime='09:00:00'
          maxTime='22:00:00'
          height='parent'
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay'
          }}
          nowIndicator={true}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          events={this.state.events}
        />
        <PopupWidget
          color="#3788d8"
          pageSettings={{
            backgroundColor: themeIsLight ? 'ffffff' : '4d5055',
            primaryColor: '00a2ff',
            textColor: themeIsLight ? '4d5055' : 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
          }}
          text="Schedule A Meeting"
          textColor="#ffffff"
          url="https://calendly.com/tawilliam"
        />
      </div>
    );
  }
}

export default Calendar;
