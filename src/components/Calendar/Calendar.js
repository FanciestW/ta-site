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
    this.calendarComponentRef = React.createRef();
    this.state = {
      calendarWeekends: true,
      calendarEvents: [ // initial event data
        { title: 'Office Hours\nLib Café', start: new Date('September 30, 2019 17:00:00'), end: new Date('September 30, 2019 21:00:00') },
        { title: 'Office Hours\nLib Café', start: new Date('October 2, 2019 16:00:00'), end: new Date('October 2, 2019 18:00:00') }
      ]
    };
  }

  render() {
    return (
      <div className='calendar-view' style={{ marginTop: '2rem' }}>
        <FullCalendar
          themeSystem='bootstrap'
          firstDay={1}
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
          ref={this.calendarComponentRef}
          weekends={this.state.calendarWeekends}
          events={{ googleCalendarId: '0h3m4vqmstfon4fpsjj54st57k@group.calendar.google.com' }}
        />
      </div>
    );
  }
}

export default Calendar;
