import React, { Component } from 'react';

// import SportsTable from '../components/SportsTable';

class FieldListPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>Athletic Association</h3>
          <p>
            The Purpose of this organization is to provide both a competitive and instructional sports program as an
            extension of the St. Catherine of Alexandria academic and religious programs. The Athletic Association will
            assist in the task of educating children to become Christian adults by providing physical training and
            supervised recreation.
          </p>
          <h4>2018-2019 Board</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Role</th>
                <th>Person</th>
                <th>Year on Board</th>
                <th>Email Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>President</td>
                <td>Greg Heidorn</td>
                <td>2nd</td>
                <td>
                  <a href="mailto:greg.heidorn@gmail.com">greg.heidorn@gmail.com</a>
                </td>
              </tr>
              <tr>
                <td>Vice President &amp; Boys Basketball Coordinator</td>
                <td>John Donahue</td>
                <td>3rd</td>
                <td />
              </tr>
              <tr>
                <td>Secretary &amp; Cheerleading Coordinator</td>
                <td>Tina Knies</td>
                <td>1st</td>
                <td />
              </tr>
              <tr>
                <td>Football Coordinator</td>
                <td>Joe Doherty</td>
                <td>3rd</td>
                <td>joed0317@yahoo.com</td>
              </tr>
              <tr>
                <td>Football Coordinator</td>
                <td>Bob Fleckenstein</td>
                <td>1st</td>
                <td />
              </tr>
              <tr>
                <td>Boys Basketball</td>
                <td>Kevin Cremins</td>
                <td>2nd</td>
                <td>
                  <a href="mailto:kcremins@hotmail.com">kcremins@hotmail.com</a>
                </td>
              </tr>
              <tr>
                <td>Girls Basketball</td>
                <td>Ed Arquilla</td>
                <td>3rd</td>
                <td />
              </tr>
              <tr>
                <td>Girls Basketball</td>
                <td>Kara Thomas</td>
                <td>1st</td>
                <td />
              </tr>
              <tr>
                <td>Girls Volleyball</td>
                <td>Chris Ivers</td>
                <td>3rd</td>
                <td />
              </tr>
              <tr>
                <td>Girls Volleyball</td>
                <td>Brian Condon</td>
                <td>3rd</td>
                <td />
              </tr>
              <tr>
                <td>Boys Volleyball</td>
                <td>Bill Marszewski</td>
                <td>3rd</td>
                <td />
              </tr>
              <tr>
                <td>Boys Volleyball</td>
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>Soccer</td>
                <td>Brian Kelly</td>
                <td>2nd</td>
                <td />
              </tr>
              <tr>
                <td>Soccer</td>
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
          <hr />
          <h4>Supporting Positions</h4>
          <br />
          <p>Supporting positions are Board appointed positions.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Role</th>
                <th>Person</th>
                <th>Years</th>
                <th>Email Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gym Coordinator</td>
                <td>Peg Guarascio</td>
                <td>5</td>
                <td>pguarascio@scaoaklawn.org</td>
              </tr>
              <tr>
                <td>Concessions Coordinator</td>
                <td>Ron Badali</td>
                <td>10</td>
                <td>rone442@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FieldListPage;
