import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { Form, Button } from "semantic-ui-react";
import InlineError from "../components/Messages/InlineError";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        username: "",
        password: ""
      },
      loading: false,
      errors: {}
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
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!data.username) errors.username = "Can't be blank";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
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
        {errors ? console.log(errors) : ""}
        <Form.Field error={!!errors.username}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={data.username}
            onChange={this.onChange}
          />
          {errors.username && <InlineError text={errors.username} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button primary>Register</Button>
      </Form>
    );
  }
}
