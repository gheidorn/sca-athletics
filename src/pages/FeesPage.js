import React, { Component } from 'react';

// import SportsTable from '../components/SportsTable';

class FieldListPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>Fees</h3>
          <p>
            Fees are reviewed each year in order to ensure the Athletic Association has enough money to cover the
            participation costs of each sport and activity, as well as contribute to the maintenance of the gym,
            uniforms, and our equipment.
          </p>
          <p>
            <strong>
              <em>Last changed: April 2018</em>
            </strong>
          </p>
          <table className="table">
            <thead>
              <tr>
                <th>Sport</th>
                <th>Grade</th>
                <th>Fee</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Football</td>
                <td>All</td>
                <td>$150</td>
                <td>Varsity (7th &amp; 8th) will pay a separate fee for named jeresys</td>
              </tr>
              <tr>
                <td>Cheerleading</td>
                <td>All</td>
                <td>$25</td>
                <td />
              </tr>
              <tr>
                <td>Boys and Girls Junior Basketball</td>
                <td>1st through 3rd</td>
                <td>$50</td>
                <td />
              </tr>
              <tr>
                <td>Boys and Girls Basketball</td>
                <td>4th</td>
                <td>$85</td>
                <td />
              </tr>
              <tr>
                <td>Boys and Girls Basketball</td>
                <td>5th through 8th</td>
                <td>$110</td>
                <td />
              </tr>
              <tr>
                <td>Boys and Girls Volleyball</td>
                <td>All</td>
                <td>$110</td>
                <td>8th Grade will pay an additional $30 for named jerseys</td>
              </tr>
              <tr>
                <td>Soccer</td>
                <td>All</td>
                <td>$50</td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FieldListPage;
