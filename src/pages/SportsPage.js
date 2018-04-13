import React, { Component } from 'react';

// import SportsTable from '../components/SportsTable';

const pathToTitleMappings = {
    '/sports/football': 'Football',
    '/sports/cheerleading': 'Cheerleading',
    '/sports/girls-basketball': 'Girls Basketball',
    '/sports/boys-basketball': 'Boys Basketball',
    '/sports/girls-volleyball': 'Girls Volleyball',
    '/sports/boys-volleyball': 'Boys Volleyball',
    '/sports/soccer': 'Soccer'
}

class SportsPage extends Component {

  render() {

    return (
        <div className="row">
            <div className="col-md-12">
                <h3>{pathToTitleMappings[this.props.match.url]}</h3>
            </div>
        </div>
    );
}
}

export default SportsPage;