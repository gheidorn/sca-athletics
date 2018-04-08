import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import AthleteListPage from './pages/AthleteListPage';
import SportsListPage from './pages/SportsListPage';
import NewAthleteFormPage from './pages/NewAthleteFormPage';
import StickyFooter from './components/StickyFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/athletes" component={AthleteListPage} />
        <Route exact path="/sports" component={SportsListPage} />
        <Route path="/athletes/new" component={NewAthleteFormPage} />
      </div>
      <StickyFooter /></div>
    );
  }
}

export default App;
