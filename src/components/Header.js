import React, {Component} from 'react';

import NewAthleteModal from './NewAthleteModal';

export default () => {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom">
        <h5 className="my-0 mr-md-auto font-weight-normal">SCA Athletics</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          {/* <a className="p-2 text-dark" href="#">Athletes</a>
          <a className="p-2 text-dark" href="#">Sports</a> */}
          {/* <a className="p-2 text-dark" href="#">Support</a>
          <a className="p-2 text-dark" href="#">Pricing</a> */}
        </nav>
        <a className="btn btn-outline-primary" href="#" data-toggle="modal" data-target="#newAthleteModal">Add New Athlete</a>
        <NewAthleteModal modalId="newAthleteModal" />
      </div>
    );
};