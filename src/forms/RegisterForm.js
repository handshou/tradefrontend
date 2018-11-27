import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { Form, Button } from "semantic-ui-react";
import InlineError from "../components/Messages/InlineError";

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        username: "",
        password: "",
        name: ""
      },
      loading: false,
      regErrors: {}
    };
  }

  onChange = e => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const regErrors = this.validate(this.state.data);
    this.setState({ regErrors });
    if (Object.keys(regErrors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data);
      // .catch(err =>
      //   this.setState({ errors: err.response.data.errors, loading: false })
      // );
    }
  };

  validate = data => {
    const regErrors = {};
    if (!data.username) regErrors.username = "Can't be blank";
    if (!data.password) regErrors.password = "Can't be blank";
    if (!data.name) regErrors.name = "Can't be blank";
    return regErrors;
  };

  render() {
    const { data, regErrors, loading } = this.state;
    return (
      <Form
        style={{
          paddingTop: "3vh",
          display: "block",
          align: "center",
          position: "absolute",
          width: "300px",
          height: "auto",
          margin: "10",
          top: "50%",
          left: "50%",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)"
        }}
        onSubmit={this.onSubmit}
        loading={loading}
      >
        <Typography variant="h3" style={{ paddingBottom: "3px" }}>
          Register
        </Typography>
        <Form.Field error={!!regErrors.name}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={this.onChange}
          />
          {regErrors.name && <InlineError text={regErrors.name} />}
        </Form.Field>
        <Form.Field error={!!regErrors.username}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={data.username}
            onChange={this.onChange}
          />
          {regErrors.username && <InlineError text={regErrors.username} />}
        </Form.Field>
        <Form.Field error={!!regErrors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={this.onChange}
          />
          {regErrors.password && <InlineError text={regErrors.password} />}
        </Form.Field>
        <Button primary>Register</Button>
      </Form>
    );
  }
}

export default connect(
  null,
  {}
)(RegisterForm);
