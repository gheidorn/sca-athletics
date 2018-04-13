import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// import SportsTable from '../components/SportsTable';

class RegistrationPage extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-md-12">
                <h3>Registration</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sport</th>
                            <th>Date(s)</th>
                            <th>Time(s)</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link to='/sports/football'>2018 Football</Link></td>
                            <td>Wednesday, May 5th, 2018</td>
                            <td>7:00pm - 8:00pm</td>
                            <td>Kane Hall</td>
                        </tr>
                        <tr>
                            <td><a href="/sports/cheerleading">2018 Cheerleading</a></td>
                            <td>Wednesday, August 10th, 2018</td>
                            <td>7:00pm - 8:00pm</td>
                            <td>Kane Hall</td>
                        </tr>
                        <tr>
                            <td>2018 Girls Basketball</td>
                            <td>Monday, May 20th, 2018<br />
                                Tuesday, May 20th, 2018
                            </td>
                            <td>7:00pm - 8:00pm</td>
                            <td>Kane Hall</td>
                        </tr>
                        <tr>
                            <td>2018-2019 Boys Basketball</td>
                            <td>Saturday, October 10th, 2018</td>
                            <td>9:00am - 10:00am</td>
                            <td>Kane Hall</td>
                        </tr>
                        <tr>
                            <td>2018-2019 Girls Volleyball</td>
                            <td>Saturday, October 10th, 2018</td>
                            <td>9:00am - 10:00am</td>
                            <td>Kane Hall</td>
                        </tr>
                        <tr>
                            <td>2019 Boys Volleyball</td>
                            <td>Saturday, October 10th, 2018</td>
                            <td>9:00am - 10:00am</td>
                            <td>Kane Hall</td>
                        </tr>
                        <tr>
                            <td>2019 Soccer</td>
                            <td>Saturday, January 31st, 2018</td>
                            <td>9:00am - 10:00am</td>
                            <td>Kane Hall</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
}

export default RegistrationPage;