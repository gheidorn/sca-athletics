import React from 'react';
import { Link } from 'react-router-dom';

const faStyle = { fontSize: '2em', color: 'red', marginRight: '20px' };
const nudge = { marginRight: '10px' };

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div style={faStyle}>
          <i className="fas fa-bolt" style={nudge} />
          <a className="text-dark" href="/">
            SCA Athletics
          </a>
        </div>

        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="navbar-collapse collapse" id="navbarsExample03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/calendar" className="nav-link">
                Calendar
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/schedule" className="nav-link">
                Sports Schedules
              </Link>
            </li>
            <li className="nav-item active">
              <a href="https://www.dropbox.com/s/xceu6mkrtobnsxw/Sports_Registration_Form.pdf?dl=0"
                className="nav-link"
              >
                Registration Form
              </a>
            </li>
            {/* <li className="nav-item">
              <Link to="/registration" className="nav-link">
                Registration
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="http://example.com"
                id="dropdown03"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sports
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown03">
                <Link to="/sports/football" className="dropdown-item">
                  Football
                </Link>
                <Link to="/sports/cheerleading" className="dropdown-item">
                  Cheerleading
                </Link>
                <Link to="/sports/girls-basketball" className="dropdown-item">
                  Girls Basketball
                </Link>
                <Link to="/sports/boys-basketball" className="dropdown-item">
                  Boys Basketball
                </Link>
                <Link to="/sports/girls-volleyball" className="dropdown-item">
                  Girls Volleyball
                </Link>
                <Link to="/sports/boys-volleyball" className="dropdown-item">
                  Boys Volleyball
                </Link>
                <Link to="/sports/soccer" className="dropdown-item">
                  Soccer
                </Link>
              </div>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="https://www.sca-athletics.org/"
                id="dropdown03"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Information
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown03">
                <Link to="/volunteering" className="dropdown-item">
                  Volunteering
                </Link>
                <Link to="/booster-raffle" className="dropdown-item">
                  Booster Raffle
                </Link>
                <Link to="/fees" className="dropdown-item">
                  Fees
                </Link>
                <Link to="/board" className="dropdown-item">
                  Athletic Association Board
                </Link>
                <Link to="/bylaws" className="dropdown-item">
                  Athletic Association Bylaws
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
