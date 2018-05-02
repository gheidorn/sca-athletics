import React, { Component } from 'react';

import NewAthleteModal from './NewAthleteModal';

const faStyle = { fontSize: '2em', color: 'Tomato' };
const fallin = { display: 'inline-block' };
const nudge = { marginRight: '10px' };

export default () => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">
          Please direct all questions to the SCA Athletic Association @{' '}
          <a href="mailto:sca-aa@gmail.com">sca-aa@gmail.com</a>.
        </span>
      </div>
    </footer>
  );
};
