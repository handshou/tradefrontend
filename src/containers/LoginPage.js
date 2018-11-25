import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";
import { Typograhpy } from "@material-ui/core";

class LoginPage extends Component {
  submit = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <Typography variant="h1">Login page</Typography>

        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default LoginPage;
