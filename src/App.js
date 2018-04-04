import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import AthleteTable from './components/AthleteTable';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <div className="row">
          <div className="col-md-12">
            <AthleteTable />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
