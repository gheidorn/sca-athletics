import React, { Component } from "react";

import "./Calendar.css";

const schoolCalendar = [
  {
    name: "July",
    month: 7,
    year: 2018
  },
  {
    name: "August",
    month: 8,
    year: 2018
  },
  {
    name: "September",
    month: 9,
    year: 2018
  },
  {
    name: "October",
    month: 10,
    year: 2018
  },
  {
    name: "November",
    month: 11,
    year: 2018
  },
  {
    name: "December",
    month: 12,
    year: 2018
  },
  {
    name: "January",
    month: 1,
    year: 2019
  },
  {
    name: "February",
    month: 2,
    year: 2019
  },
  {
    name: "March",
    month: 3,
    year: 2019
  },
  {
    name: "April",
    month: 4,
    year: 2019
  },
  {
    name: "May",
    month: 5,
    year: 2019
  },
  {
    name: "June",
    month: 6,
    year: 2019
  }
];

class Calendar extends Component {
  componentWillMount() {
    // sort the events by month, then day
    this.props.events.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      }
      if (a.year === b.year && a.month > b.month) {
        return 1;
      }
      if (a.year === b.year && a.month === b.month && a.day > b.day) {
        return 1;
      }
      if (a.year === b.year && a.month === b.month && a.day < b.day) {
        return -1;
      }
      if (a.year < b.year) {
        return -1;
      }
      return 0;
    });
  }

  render() {
    let monthFilter = function(event) {
      return event.month === schoolCalendar[i].month;
    };

    let eventMarkup = [];
    for (var i = 0; i < schoolCalendar.length; i++) {
      eventMarkup.push(
        <h4 key={schoolCalendar[i].name}>{schoolCalendar[i].name}</h4>
      );
      eventMarkup.push(
        this.props.events
          .filter(monthFilter)
          .map(({ name, date, month, day, type }) => (
            <div className="event" key={name}>
              <div className="date">{day}</div>
              <div className="name">{name}</div>
              <div className="type">{type}</div>
            </div>
          ))
      );
    }

    return (
      <div className="row">
        <div className="col-md-12">{eventMarkup}</div>
      </div>
    );
  }
}

export default Calendar;
