import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import googleCalendarPlugin from '@fullcalendar/google-calendar';

import './Calendar.scss';

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth, height: window.innerHeight };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.calendarRef = React.createRef();
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

  render() {
    return (
      <div className='calendar-view' style={{ marginTop: '2rem' }}>
        <FullCalendar ref={this.calendarRef}
          themeSystem='bootstrap'
          firstDay={1}
          allDaySlot={false}
          defaultView="timeGridWeek"
          minTime='08:00:00'
          maxTime='24:00:00'
          height='parent'
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay'
          }}
          nowIndicator={true}
          googleCalendarApiKey={process.env.REACT_APP_CAL_API_KEY}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, googleCalendarPlugin]}
          weekends={true}
          events={{ googleCalendarId: '0h3m4vqmstfon4fpsjj54st57k@group.calendar.google.com' }}
        />
      </div>
    );
  }
}

export default Calendar;
