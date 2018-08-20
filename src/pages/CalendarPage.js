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
        year: 2018,
        type: 'School Event'
      },
      {
        name: 'Back to School Night',
        date: 'August 30th',
        month: 8,
        day: 30,
        year: 2018,
        type: 'Parish Event'
      },
      {
        name: 'Wellness Night',
        date: 'September 14th',
        month: 9,
        day: 14,
        year: 2018,
        type: 'Athletic Association Event'
      },
      {
        name: 'Columbus Day (No School)',
        date: 'October 8th',
        month: 10,
        day: 8,
        year: 2018,
        type: 'School Event'
      },
      {
        name: 'Charger Crawl',
        date: 'September 8th',
        month: 9,
        day: 8,
        year: 2018,
        type: 'FSA Event'
      },
      {
        name: 'Oktoberfest',
        date: 'October 20th',
        month: 10,
        day: 20,
        year: 2018,
        type: 'FSA Event'
      },
      {
        name: 'Trunk or Treat',
        date: 'October 27th',
        month: 10,
        day: 27,
        year: 2018,
        type: 'FSA Event'
      },
      {
        name: 'Athletic Board Meeting',
        date: 'August 20th',
        month: 8,
        day: 20,
        year: 2018,
        type: 'Athletic Association Event'
      },
      {
        name: 'Athletic Board Meeting',
        date: 'September 17th',
        month: 9,
        day: 17,
        year: 2018,
        type: 'Athletic Association Event'
      },
      {
        name: 'Athletic Board Meeting',
        date: 'October 15th',
        month: 10,
        day: 15,
        year: 2018,
        type: 'Athletic Association Event'
      },
      {
        name: 'Athletic Board Meeting',
        date: 'November 19th',
        month: 11,
        day: 19,
        year: 2018,
        type: 'Athletic Association Event'
      },
      {
        name: 'Athletic Board Meeting',
        date: 'December 17th',
        month: 12,
        day: 17,
        year: 2018,
        type: 'Athletic Association Event'
      },
      {
        name: 'Athletic Board Meeting',
        date: 'January 14th',
        month: 1,
        day: 14,
        year: 2019,
        type: 'Athletic Association Event'
      },
      {
        name: 'Athletic Board Meeting',
        date: 'February 11th',
        month: 2,
        day: 11,
        year: 2019,
        type: 'Athletic Association Event'
      },
      {
        name: 'Athletic Board Meeting',
        date: 'March 11th',
        month: 3,
        day: 11,
        year: 2018,
        type: 'Athletic Association Event'
      },
      {
        name: 'Athletic Board Meeting',
        date: 'April 15th',
        month: 4,
        day: 15,
        year: 2018,
        type: 'Athletic Association Event'
      },
      {
        name: 'Athletic Board Meeting',
        date: 'May 13th',
        month: 5,
        day: 13,
        year: 2019,
        type: 'Athletic Association Event'
      },
      {
        name: 'Athletic Board Meeting and Party',
        date: 'June 24th',
        month: 6,
        day: 24,
        year: 2019,
        type: 'Athletic Association Event'
      }
    ];

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h3>2018-2019 Calendar</h3>
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
