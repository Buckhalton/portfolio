import React, { Component } from 'react'
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
    root: {
      flexGrow: 1,
    },
    appBarText: {
    }
  };

class Header extends Component {
  render() {
      //conditional rendering for admin page
      let display;
      if(this.props.reduxStore.isAuthenticated){
          display = 'Admin';
      } else {
          display = 'My Portoflio';
      }
    return (
        <MuiThemeProvider theme={theme}>
            <div className={styles.root}>
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h6">
                        {display}
                    </Typography>
                    </Toolbar>
                </AppBar>
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

export default connect(mapStateToProps)(Header);
