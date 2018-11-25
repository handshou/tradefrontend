import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import LoginForm from "../../forms/LoginForm";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  login: {
    paddingTop: "0"
  },
  root: {
    flexGrow: 1
  },
  spacer: {
    paddingTop: "20px"
  }
};

class Login extends Component {
  submit = data => {
    console.log(data);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography
          style={styles.spacer}
          variant="h5"
          color="inherit"
          className={classes.grow}
        >
          Login Page
        </Typography>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default withStyles(styles)(Login);
