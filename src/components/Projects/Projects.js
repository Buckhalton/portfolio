import React, { Component } from 'react'
import {connect} from 'react-redux';
import Header from '../Header/Header';

class Projects extends Component {
    componentDidMount = () => {
        this.props.dispatch({type: 'FETCH_PROJECTS'})
    }

  render() {
      let projectsDisplay = this.props.reduxStore.projects.map(project => {
          return(
              <div key={project.id}>
                <hr/>
                <img alt="thumbnail" src={project.thumbnail}/>
                <h3>{project.name}</h3>
                <a target="_blank" href={project.github}>Github</a>
                <a target="_blank" href={project.website}>Website</a>
                <h4>{project.tag}</h4>
                <p>{project.description}</p>
            <hr/>    
          </div>
          )
      })
    return (
      <div>
          <Header />
        <div>
            <img alt="Me" src="/images/profile.jpeg"/>
            <h2>Isaiah Buckhalton</h2>
        </div>

        <div>
            {projectsDisplay}   
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
