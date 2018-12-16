import React, { Component } from 'react'
import {withRouter, Link } from 'react-router-dom';
import {connect} from 'react-redux';

// This component is the Admin page.
class Admin extends Component {
    state = {
        name: '',
        date_completed: '',
        tag_id: 0,
        github: '',
        website: '',
        description: '',
    } // end State

    componentDidMount = () => {
        //Sets isAuthenticated for conditional rendering.
        this.props.dispatch({type: 'SET_ADMIN', payload: true})
        this.props.dispatch({type: 'FETCH_PROJECTS'})
    } // end componentDidMount

    setAuth = () => {
        //changes isAuthenticated before leaving the page.
        this.props.dispatch({type: 'SET_ADMIN', payload: false})
    } // end setAuth


    // Start ChangeState methods
    changeTagState = (event) => {
        this.setState({
            ...this.state,
            tag_id: event.target.value
        }) // end setState
    } // end changeTagState

    changeDateState = (event) => {
        this.setState({
            ...this.state,
            date_completed: event.target.value,
        }) // end setState
    } // end changeDateState

    changeNameState = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value,
        }) // end setState
    } // end changeNameState

    changeGithubState = (event) => {
        this.setState({
            ...this.state,
            github: event.target.value,
        }) // end setState
    } // end changeGithubState

    changeDescriptionState = (event) => {
        this.setState({
            ...this.state,
            description: event.target.value,
        }) // end setState
    }// end changeDescriptionState

    changeWebsiteState = (event) => {
        this.setState({
            ...this.state,
            website: event.target.value,
        }) // end setState
    } // end changeWebsiteState

    //End changeState methods

    // changeState = (event) => {
    //     this.setState({
    //         name: event.target.value,
    //         date_completed: event.target.value,
    //         tag_id: event.target.value,
    //         github: event.target.value,
    //         website: event.target.value,
    //         description: event.target.value,
    //     })
    // }

    //dispatches to index
    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.dispatch({type: 'POST_PROJECTS', payload: this.state})
        if(this.props.reduxStore.projects === []){
            alert('The post failed!');
        } else {
            alert('Success! Project posted');
        }
    } // end submitForm

    deleteProject = (project) => {
        this.props.dispatch({type: 'DELETE_PROJECTS', payload: project.id})
    } // end deleteProjects

  render() {
      //Maps out each project in the DB to a table
      let projectTableData = this.props.reduxStore.projects.map(project => {
          return (
            <tr key={project.id}>
                <td>{project.name}</td>
                <td><button onClick={() => this.deleteProject(project)}>Delete</button></td>
            </tr>
          )
      })
    return (
      <div>
        <Link onClick={this.setAuth} to="/">Back to Projects</Link>
        <div>
            <h2>Add New Project</h2>
            <form>
                <input onChange={this.changeNameState} type="text" placeholder="name"/>
                <input onChange={this.changeDateState} type="date"/>
                <select onChange={this.changeTagState} defaultValue={0}>
                    <option value={0} disabled>Select a Tag</option>
                    <option value={1}>React</option>
                    <option value={2}>jQuery</option>
                    <option value={3}>Node</option>
                    <option value={4}>SQL</option>
                    <option value={5}>Redux</option>
                    <option value={6}>HTML</option>
                </select>
                <input onChange={this.changeGithubState} type="text" placeholder="Github URL"/>
                <input onChange={this.changeWebsiteState} type="text" placeholder="Website URL(Optional)" />
                <textarea onChange={this.changeDescriptionState} type="text" placeholder="Description" />
                <input onClick={this.submitForm} type="submit"/>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {projectTableData}
                </tbody>
            </table>
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
