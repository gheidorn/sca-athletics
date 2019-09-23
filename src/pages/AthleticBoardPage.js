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
          <h4>2019-2020 Board</h4>
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
                <td>3rd</td>
                <td>
                  <a href="mailto:greg.heidorn@gmail.com">greg.heidorn@gmail.com</a>
                </td>
              </tr>
              <tr>
                <td>Vice President &amp; Boys Basketball Coordinator</td>
                <td>John Donahue</td>
                <td>4th</td>
                <td>
                  <a href="jdonahue1487@gmail.com">jdonahue1487@gmail.com</a>
                </td>
              </tr>
              <tr>
                <td>Treasurer</td>
                <td>Mike Larmon</td>
                <td>3rd</td>
                <td>
                  <a href="c.mlarmon@sbcglobal.net">c.mlarmon@sbcglobal.net</a>
                </td>
              </tr>
              <tr>
                <td>Secretary &amp; Cheerleading Coordinator</td>
                <td>Tina Knies</td>
                <td>2nd</td>
                <td>
                  <a href="tinaknies@gmail.com">tinaknies@gmail.com</a>
                </td>
              </tr>
              <tr>
                <td>Football Coordinator</td>
                <td>Joe Doherty</td>
                <td>4th</td>
                <td>
                  <a href="joed0317@yahoo.com">joed0317@yahoo.com</a>
                </td>
              </tr>
              <tr>
                <td>Football Coordinator</td>
                <td>Bob Fleckenstein</td>
                <td>2nd</td>
                <td>
                  <a href="flecktl39@yahoo.com">flecktl39@yahoo.com</a>
                </td>
              </tr>
              <tr>
                <td>Boys Basketball Coordinator</td>
                <td>Kevin Cremins</td>
                <td>3rd</td>
                <td>
                  <a href="mailto:kcremins@hotmail.com">kcremins@hotmail.com</a>
                </td>
              </tr>
              <tr>
                <td>Girls Basketball Coordinator</td>
                <td>Ed Arquilla</td>
                <td>4th</td>
                <td>
                  <a href="ed.arquilla@ups.com">ed.arquilla@ups.com</a>
                </td>
              </tr>
              <tr>
                <td>Girls Basketball Coordinator</td>
                <td>Kara Thomas</td>
                <td>2nd</td>
                <td>
                  <a href="karamce@sbcglobal.net">karamce@sbcglobal.net</a>
                </td>
              </tr>
              <tr>
                <td>Girls Volleyball Coordinator</td>
                <td>Bill Henning</td>
                <td>1st</td>
                <td>
                  <a href="wjhenning1982@hotmail.com">wjhenning1982@hotmail.com</a>
                </td>
              </tr>
              <tr>
                <td>Girls Volleyball Coordinator</td>
                <td>Lisa Krueger</td>
                <td>1st</td>
                <td>
                  <a href="Lisa.Krueger@chsd218.org">Lisa.Krueger@chsd218.org</a>
                </td>
              </tr>
              <tr>
                <td>Boys Volleyball Coordinator</td>
                <td>Bill Marszewski</td>
                <td>4th</td>
                <td>
                  <a href="animalx@comcast.com">animalx@comcast.com</a>
                </td>
              </tr>
              <tr>
                <td>Soccer Coordinator</td>
                <td>Shannon Nolan</td>
                <td>2nd</td>
                <td>
                  <a href="SNolan@olparks.com">SNolan@olparks.com</a>
                </td>
              </tr>
              <tr>
                <td>Soccer Coordinator</td>
                <td>Kevin Krull</td>
                <td>1st</td>
                <td>
                  <a href="kevin@krullwindow.com">kevin@krullwindow.com</a>
                </td>
              </tr>
              <tr>
                <td>Volunteer Coordinator</td>
                <td>Kelly Withers</td>
                <td>2nd</td>
                <td>
                  <a href="kellyjean1976@att.net">kellyjean1976@att.net</a>
                </td>
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
                <td>
                  <a href="pguarascio@scaoaklawn.org">pguarascio@scaoaklawn.org</a>
                </td>
              </tr>
              <tr>
                <td>Concessions Coordinator</td>
                <td>Ron Badali</td>
                <td>10</td>
                <td>
                  <a href="rone442@gmail.com">rone442@gmail.com</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FieldListPage;
