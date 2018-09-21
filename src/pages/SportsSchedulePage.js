import React, { Component } from 'react';

// import SportsTable from '../components/SportsTable';

class SportsSchedulePage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>Sports Schedules</h3>
          <ul>
            <li>
              <a href="https://www.dropbox.com/s/eq7fdomr8eav9ww/2018-SCA-Football-Schedule-ALL.pdf?dl=0">
                2018 SCA Football Schedule - All Teams
              </a>
            </li>
            <li>
              <a href="https://www.dropbox.com/s/rf1dnedk57ik7qq/2018%20St.%20Catherine%27s%20Football%20Rosters.pdf?dl=0">
                2018 SCA Football Rosters
              </a>
            </li>
            <li>
              <a href="https://www.dropbox.com/s/gupu9rkancf5t7w/2018%20SCA%20Junior%20Basketball%20Schedule.pdf?dl=0">
                2018 Junior Basketball Schedule
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SportsSchedulePage;
