import React, { Component } from "react";
import LoginForm from "../../forms/LoginForm";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/shop"));
  render() {
    return (
      <div>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

// we don't need anything, hence instead of first param mapStateToProps(), we pass null. second one is mapDispatchToProps()
export default connect(
  null,
  { login }
)(Login);
