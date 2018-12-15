import React, { Component } from 'react';
import {HashRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Projects from '../Projects/Projects';
import Header from '../Header/Header';
import Admin from '../Admin/Admin';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            <Projects/>
            <Route path="/admin" component={Admin}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
