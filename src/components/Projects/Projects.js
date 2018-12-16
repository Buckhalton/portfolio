import React, { Component } from 'react'
import {connect} from 'react-redux';
import Header from '../Header/Header';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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

  const styles = {
      spacing: {
          padding: '300 px'
      }
  }
  
//This component is for displaying projects on the DOM
class Projects extends Component {
    
    
    
    
    componentDidMount = () => {
        this.props.dispatch({type: 'FETCH_PROJECTS'})
    } // end componentDidMount

  render() {
      //Mapping projects onto the DOM
      let projectsDisplay = this.props.reduxStore.projects.map(project => {
          return(
              <div>
                <hr/>
                <Grid container key={project.id} className={styles.spacing}>
                    <img alt="thumbnail" src={project.thumbnail}/>
                    <Grid>
                        <h3>{project.name}</h3>
                    </Grid>
                    <Grid>
                        <div><a target="_blank" href={project.github}>Github</a></div>
                        <div><a target="_blank" href={project.website}>Website</a></div>
                    </Grid>
                    <Grid>
                        <h4>{project.tagname}</h4>
                        <p>{project.description}</p>
                    </Grid>  
                </Grid>
          <hr/> 
        </div> 
          )
      })
    return (
      <MuiThemeProvider theme={theme}>
          <Header />
        <div>
            <img alt="Me" src="/images/profile.jpeg"/>
            <h2>Isaiah Buckhalton</h2>
        </div>

        <div>
            {projectsDisplay}   
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = reduxStore => {
    return{
        reduxStore
    }
} 

export default connect(mapStateToProps)(Projects);
