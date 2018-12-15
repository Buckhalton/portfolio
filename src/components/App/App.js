import React, { Component } from 'react';
import {HashRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import Projects from '../Projects/Projects';
import Header from '../Header/Header';
import Admin from '../Admin/Admin';

class App extends Component {
 
  componentDidMount = () => {

  }

  // Renders the entire app on the DOM  
  render() {
    let display;
    if(this.props.reduxStore.isAuthenticated) {
      display = <Header/>
    } else {
      display = <Projects/>
    }

    return (
      <div className="App">
        <Router>
          <div>
            {/* <Header/> */}
            {display}
            <Route path="/admin" component={Admin}/>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return{
      reduxStore
  }
} 

export default connect(mapStateToProps)(App);
