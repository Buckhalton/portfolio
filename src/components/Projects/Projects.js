import React, { Component } from 'react'
import {connect} from 'react-redux';
import Header from '../Header/Header';

class Projects extends Component {
  render() {
    return (
      <div>
          <Header />
        <div>
            <img alt="Me" src="/images/profile.jpeg"/>
            <h2>Isaiah Buckhalton</h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxStore => {
    return{
        reduxStore
    }
} 

export default connect(mapStateToProps)(Projects);
