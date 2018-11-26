import React, { Component } from "react";
import RegisterForm from "../../forms/RegisterForm";
import { connect } from "react-redux";
import { register } from "../../actions/users";

class Register extends Component {
  constructor(props) {
    super(props);
  }
  submit = data =>
    this.props.register(data).then(() => this.props.history.push("/shop"));

  render() {
    return (
      <div>
        <RegisterForm submit={this.submit} />
      </div>
    );
  }
}

export default connect(
  null,
  { register }
)(Register);
