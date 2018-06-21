import React, { Component } from 'react';

import './Calendar.css';

class Calendar extends Component {
  render() {
    // sort the events by date
    return (
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          {this.props.events.map(({ name, date, month, day, type }) => (
            <div className="event" key={name}>
              <div className="date">{day}</div>
              <div className="name">{name}</div>
              <div className="type">{type}</div>
            </div>
          ))}
        </div>
        <div className="col-md-2" />
      </div>
    );
  }
}

export default Calendar;
