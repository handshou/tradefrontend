import React, { Component } from 'react'
import { Typography } from '@material-ui/core';

const styles = {
    login: {
        "paddingTop":"0",
    },
}

export default class Login extends Component {
  render() {
    return (
      <div>    
        <Typography style={styles.login}>
            Login Page
        </Typography>
      </div>
    )
  }
}
