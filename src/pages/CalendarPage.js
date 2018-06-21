import React, { Component } from 'react';

import Calendar from '../components/Calendar';

class CalendarPage extends Component {
  render() {
    const events = [
      {
        name: 'Charge On 5k and Picnic',
        date: 'August 18th',
        month: 8,
        day: 18,
        type: 'School Event'
      },
      {
        name: 'Back to School Night',
        date: 'August 30th',
        month: 8,
        day: 30,
        type: 'Parish Event'
      },
      {
        name: 'Wellness Night',
        date: 'September 14th',
        month: 9,
        day: 14,
        type: 'Athletic Association Event'
      },
      {
        name: 'Columbus Day (No School)',
        date: 'October 8th',
        month: 10,
        day: 8,
        type: 'School Event'
      },
      {
        name: 'Charger Crawl',
        date: 'September 8th',
        month: 9,
        day: 8,
        type: 'FSA Event'
      },
      {
        name: 'Oktoberfest',
        date: 'October 20th',
        month: 10,
        day: 20,
        type: 'FSA Event'
      },
      {
        name: 'Trunk or Treat',
        date: 'October 27th',
        month: 10,
        day: 27,
        type: 'FSA Event'
      }
    ];

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h3>2018 Calendar</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Calendar events={events} />
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarPage;
