import React, {Component} from 'react';

import NewAthleteModal from './NewAthleteModal';

const faStyle = {fontSize:'2em', color:'Tomato' };
const fallin = { display: 'inline-block' };
const nudge = { marginRight: '10px' };

export default () => {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom">
        <div className="col-md-6" style={fallin}>
          <div style={faStyle}>
            <i className="fas fa-bolt" style={nudge}></i>
            <a className="text-dark" href="/">SCA Athletics</a>
          </div>
        </div>
        <div className="col-md-6">
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="/sports">Sports</a>
          <a className="p-2 text-dark" href="/registration">Registration</a>
          <a className="p-2 text-dark" href="/fees">Fees</a>
          <a className="p-2 text-dark" href="/bylaws">Bylaws</a>
          |
          <a className="p-2 text-dark" href="/athletes">Athletes</a>
        </nav>

        {/* <a className="btn btn-outline-primary" href="/athletes/new" data-toggle="modal" data-target="#newAthleteModal">Add New Athlete</a> */}
        {/* <NewAthleteModal modalId="newAthleteModal" /> */}
        </div>
      </div>
    );
};