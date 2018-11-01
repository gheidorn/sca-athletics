import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FootballChampionshipPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>2018 Football Championships</h3>
          <ul>
            <li>11:00 AM - JV Championship</li>
            <li>1:00 PM - Conner T. Lowry Award Ceremony</li>
            <li>1:15 PM - Gold Ball Championship</li>
          </ul>
          <p>
            The Visitors side gate will be open from 10 AM to 1:30 PM. Fans can park in the Mother McAuley parking lot
            if they prefer. St. Catherine will be the visiting team for both games and use the Visitors/East sidelines
            at Br. Rice. The Main gate will be open from 10 AM to 2 PM.
          </p>
          <p>
            Br. Rice will generously provide livestream TV coverage of both games. Please ensure that you send this out
            to your school/Parish and ask them to blast it out to your entire school/Parish community. The links for
            both games are below.
          </p>
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=SHKRXxH23gk">5/6 JV Championship Game</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=BKICvOAAntE">7/8 Gold Ball Championship Game</a>
            </li>
          </ul>
          <p>Thanks and good luck to our teams this weekend!</p>
        </div>
      </div>
    );
  }
}

export default FootballChampionshipPage;
