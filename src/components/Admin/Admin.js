import React, { Component } from 'react'
import {withRouter, Link } from 'react-router-dom';
import {connect} from 'react-redux';


class Admin extends Component {
    state = {
        name: '',
        date_completed: '',
        tag_id: 0,
        github: '',
        website: '',
        description: '',
    }

    componentDidMount = () => {
        this.props.dispatch({type: 'SET_ADMIN', payload: true})
        this.props.dispatch({type: 'FETCH_PROJECTS'})
    }

    setAuth = () => {
        this.props.dispatch({type: 'SET_ADMIN', payload: false})
    }

    // changeTagState = (event) => {
    //     this.setState({
    //         ...this.state,
    //         tag_id: event.target.value
    //     })
    // }

    // changeDateState = (event) => {
    //     this.setState({
    //         ...this.state,
    //         date_completed: event.target.value,
    //     })
    // }

    // changeNameState = (event) => {
    //     this.setState({
    //         ...this.state,
    //         name: event.target.value,
    //     })
    // }

    // changeGithubState = (event) => {
    //     this.setState({
    //         ...this.state,
    //         github: event.target.value,
    //     })
    // }

    // changeDescriptionState = (event) => {
    //     this.setState({
    //         ...this.state,
    //         description: event.target.value,
    //     })
    // }

    // changeWebsiteState = (event) => {
    //     this.setState({
    //         ...this.state,
    //         website: event.target.value,
    //     })
    // }

    changeState = (event) => {
        this.setState({
            name: event.target.value,
            date_completed: event.target.value,
            tag_id: event.target.value,
            github: event.target.value,
            website: event.target.value,
            description: event.target.value,
        })
    }


    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.dispatch({type: 'POST_PROJECTS', payload: this.state})
    }

    deleteProject = (project) => {
        this.props.dispatch({type: 'DELETE_PROJECT', payload: project.id})
    }

  render() {
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
                <input value={this.state.name} onChange={this.changeState} type="text" placeholder="name"/>
                <input value={this.state.date_completed} onChange={this.changeState} type="date"/>
                <select value={this.state.tag_id} onChange={this.changeState} defaultValue={0}>
                    <option value={0} disabled>Select a Tag</option>
                    <option value={1}>React</option>
                    <option value={2}>jQuery</option>
                    <option value={3}>Node</option>
                    <option value={4}>SQL</option>
                    <option value={5}>Redux</option>
                    <option value={6}>HTML</option>
                </select>
                <input value={this.state.github} onChange={this.changeState} type="text" placeholder="Github URL"/>
                <input value={this.state.website} onChange={this.changeState} type="text" placeholder="Website URL(Optional)" />
                <textarea value={this.state.description} onChange={this.changeState} type="text" placeholder="Description" />
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
