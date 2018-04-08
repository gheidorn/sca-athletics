import React, { Component } from 'react';

import AthleteTable from '../components/AthleteTable';

class AthleteListPage extends Component {
  render() {
    return (
        <div>
            <div className="row">
                <div className="col-md-10">
                    <h3>Athletes List</h3>
                </div>
                <div className="col-md-2">
                    <a className="btn btn-outline-primary" href="/athletes/new">Add New Athlete</a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <AthleteTable />
                </div>
            </div>
        </div>
    );
}
}

export default AthleteListPage;