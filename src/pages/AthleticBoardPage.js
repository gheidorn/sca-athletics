import React, { Component } from 'react';

// import SportsTable from '../components/SportsTable';

class FieldListPage extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-md-12">
                <h3>Athletic Association</h3>
                <p>The Purpose of this organization is to provide both a competitive and
instructional sports program as an extension of the St. Catherine of
Alexandria academic and religious programs. The Athletic Association will
assist in the task of educating children to become Christian adults by
providing physical training and supervised recreation.</p>
                <h4>2018-2019 Board</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Role</th>
                            <th>Person</th>
                            <th>Years on Board</th>
                            <th>Phone Number</th>
                            <th>Email Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Boys Basketball</td>
                            <td>Greg Heidorn</td>
                            <td>1</td>
                            <td>708-954-6727</td>
                            <td>greg.heidorn@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Boys Basketball</td>
                            <td>Kevin Cremins</td>
                            <td>1</td>
                            <td>708-954-6727</td>
                            <td>greg.heidorn@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Girls Basketball</td>
                            <td>John Donahue</td>
                            <td>2</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Girls Basketball</td>
                            <td>Ed Arquilla</td>
                            <td>3</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
}

export default FieldListPage;