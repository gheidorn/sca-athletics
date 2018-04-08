import React, { Component } from 'react';

import NewAthleteForm from '../components/NewAthleteForm';

class NewAthleteFormPage extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-md-12">
            <NewAthleteForm />
          </div>
        </div>
    );
  }
}

export default NewAthleteFormPage;
