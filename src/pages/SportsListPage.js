import React, { Component } from 'react';

import SportsTable from '../components/SportsTable';

class SportsListPage extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-md-12">
                <h3>Sports</h3>
                <SportsTable />
            </div>
        </div>
    );
}
}

export default SportsListPage;