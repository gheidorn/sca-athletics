import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import AthleticBoardPage from './pages/AthleticBoardPage';
import AthleteListPage from './pages/AthleteListPage';
import SportsPage from './pages/SportsPage';
import SportsListPage from './pages/SportsListPage';
import NewAthleteFormPage from './pages/NewAthleteFormPage';
import RegistrationPage from './pages/RegistrationPage';
import StickyFooter from './components/StickyFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid">  
          <Route exact path="/" component={HomePage} />
          <Route exact path="/athletes" component={AthleteListPage} />
          <Route exact path="/sports" component={SportsListPage} />
          <Route exact path="/sports/*" component={SportsPage} />
          <Route path="/athletes/new" component={NewAthleteFormPage} />
          <Route path="/registration" component={RegistrationPage} />
          <Route path="/board" component={AthleticBoardPage} />
        </div>
        <StickyFooter />
      </div>
    );
  }
}

export default App;
