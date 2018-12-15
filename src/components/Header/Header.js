import React, { Component } from 'react'
import {connect} from 'react-redux';

class Header extends Component {
  render() {
      let display;
      if(this.props.reduxStore.isAuthenticated){
          display = <div><h1>Admin</h1></div>
      } else {
          display = <div></div>
      }
    return (
      <div>
          <header>
              {display}
          </header>
      </div>
    )
  }
}
const mapStateToProps = reduxStore => {
    return{
        reduxStore
    }
  } 

export default connect(mapStateToProps)(Header);
