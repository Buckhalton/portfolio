import React, { Component } from 'react'
import {withRouter, Link } from 'react-router-dom';
import {connect} from 'react-redux';


class Admin extends Component {
    componentDidMount = () => {
        this.props.dispatch({type: 'SET_ADMIN', payload: true})
    }

    setAuth = () => {
        this.props.dispatch({type: 'SET_ADMIN', payload: false})
    }

  render() {
    return (
      <div>
        <Link onClick={this.setAuth} to="/">Back to Projects</Link>
        <div>
            <form>
                
            </form>
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

export default withRouter(connect(mapStateToProps)(Admin));
