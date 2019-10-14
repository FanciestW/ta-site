import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import request from 'request-promise';
import './Calendar.scss';

const EVENTS_SERVER = 'https://xazbttr8qi.execute-api.us-east-1.amazonaws.com/dev/events';

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth, height: window.innerHeight, events: [] };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.getCalendarEvents = this.getCalendarEvents.bind(this);
    this.calendarRef = React.createRef();
    this.getCalendarEvents();
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.calendarRef.current.getApi().changeView(this.state.width <= 500 ? 'timeGridDay' : 'timeGridWeek');
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    this.calendarRef.current.getApi().changeView(this.state.width <= 500 ? 'timeGridDay' : 'timeGridWeek');
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    this.calendarRef.current.getApi().changeView(this.state.width <= 500 ? 'timeGridDay' : 'timeGridWeek');
  }

  getCalendarEvents() {
    request({
      uri: EVENTS_SERVER,
      json: true,
    }).then((eventsRes) => {
      this.setState({events: eventsRes.events });
    }).catch((eventsErr) => {
      console.log(`Error: ${JSON.stringify(eventsErr)}`);
    });
  }

  render() {
    return (
      <div className='calendar-view' style={{ marginTop: '2rem' }}>
        <FullCalendar ref={this.calendarRef}
          themeSystem='bootstrap'
          firstDay={1}
          allDaySlot={true}
          defaultView="timeGridWeek"
          weekends={true}
          minTime='08:00:00'
          maxTime='24:00:00'
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
      </div>
    );
  }
}

export default Calendar;
