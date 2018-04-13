import React, { Component } from 'react';

import NewAthleteForm from '../components/NewAthleteForm';

class HomePage extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-md-12">
            <h2 style={{textAlign:'center'}}>Welcome to the home of St. Catherine's of Alexandria Chargers!</h2>
            {/* <Carousel /> */}
          </div>
        </div>
    );
  }
}

export default HomePage;
