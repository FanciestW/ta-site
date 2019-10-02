import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

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
      <div className='demo-app'>
        <div className='demo-app-calendar'>
          <FullCalendar
            themeSystem='bootstrap'
            firstDay={1}
            defaultView="timeGridWeek"
            minTime='08:00:00'
            maxTime='24:00:00'
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'timeGridWeek,timeGridDay'
            }}
            nowIndicator={true}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
          />
        </div>
      </div>
    );
  }
}

export default Calendar;
