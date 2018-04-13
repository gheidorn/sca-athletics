import React, { Component } from 'react';

import AthleteTable from '../components/AthleteTable';
import AthleteList from '../components/AthleteList';

class AthleteListPage extends Component {
    constructor(props) {
        super(props);


    }

  render() {

    const athletes = [
        { firstName: 'Sarah', lastName: 'Heidorn', grade: 8, sports: ['Cheerleading', 'Girls Volleyball', 'Soccer']},
        { firstName: 'Dominick', lastName: 'Heidorn', grade: 7, sports: ['Football', 'Boys Basketball', 'Boys Volleyball', 'Soccer']},
        { firstName: 'Joe', lastName: 'Smith', grade: 7, sports: ['Football', 'Boys Basketball', 'Boys Volleyball', 'Soccer']},
        { firstName: 'Pete', lastName: 'Doe', grade: 7, sports: ['Football', 'Boys Basketball', 'Boys Volleyball', 'Soccer']},
    ];

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
                    {/* <AthleteTable /> */}
                    <AthleteList athletes={athletes} />
                </div>
            </div>
        </div>
    );
}
}

export default AthleteListPage;