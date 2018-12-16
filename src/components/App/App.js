import React, { Component } from 'react';
import {HashRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import Projects from '../Projects/Projects';
import Header from '../Header/Header';
import Admin from '../Admin/Admin';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#81d4fa',
    },
    secondary: {
      main: '#80cbc4',
    },
  },
});

class App extends Component {
 
  // Renders the entire app on the DOM  
  render() {
    // conditional rendering for Admin page
    let display;
    if(this.props.reduxStore.isAuthenticated) {
      display = <Header/>
    } else {
      display = <Projects/>
    }

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <div>
              {display}
              <Route path="/admin" component={Admin}/>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = reduxStore => {
  return{
      reduxStore
  }
} 

export default connect(mapStateToProps)(App);
