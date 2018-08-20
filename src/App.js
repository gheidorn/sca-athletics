import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import AthleticBoardPage from './pages/AthleticBoardPage';
import AthleteListPage from './pages/AthleteListPage';
import SportsPage from './pages/SportsPage';
import SportsListPage from './pages/SportsListPage';
import NewAthleteFormPage from './pages/NewAthleteFormPage';
import RegistrationPage from './pages/RegistrationPage';
import ByLawsPage from './pages/ByLawsPage';
import StickyFooter from './components/StickyFooter';
import CalendarPage from './pages/CalendarPage';
import FeesPage from './pages/FeesPage';
import SportsSchedulePage from './pages/SportsSchedulePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/calendar" component={CalendarPage} />
          <Route exact path="/athletes" component={AthleteListPage} />
          <Route exact path="/sports" component={SportsListPage} />
          <Route exact path="/sports/*" component={SportsPage} />
          <Route path="/athletes/new" component={NewAthleteFormPage} />
          <Route path="/registration" component={RegistrationPage} />
          <Route path="/board" component={AthleticBoardPage} />
          <Route path="/bylaws" component={ByLawsPage} />
          <Route path="/fees" component={FeesPage} />
          <Route path="/schedule" component={SportsSchedulePage} />
        </div>
        <StickyFooter />
      </div>
    );
  }
}

export default App;
