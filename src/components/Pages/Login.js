import React, { Component } from "react";
import LoginForm from "../../forms/LoginForm";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

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
  constructor(props) {
    super(props);
  }

  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/"));
  render() {
    return (
      <div>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
