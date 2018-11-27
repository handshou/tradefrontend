import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Message, Form, Button } from "semantic-ui-react";
import InlineError from "../components/Messages/InlineError";

class LoginForm extends Component {
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
      this.props.submit(this.state.data).catch(err => {
        if (err.response) {
          this.setState({ errors: err.response.data.errors, loading: false });
        } else this.setState({ errors: "Unresponsive", loading: false });
      });
    }
  };

  validate = data => {
    const errors = {};
    if (!data.username) errors.username = "Invalid username";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    const RegisterLink = props => <Link to="/register" {...props} />;
    return (
      <div>
        <Form
          onSubmit={this.onSubmit}
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
          loading={loading}
        >
          <Typography variant="h3" style={{ paddingBottom: "5px" }}>
            Login
          </Typography>
          {errors.global && (
            <Message negative>
              <Message.Header>Something went wrong</Message.Header>
              <p>{errors.global}</p>
            </Message>
          )}
          <Form.Field error={!!errors.username}>
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
          <div className="ui buttons">
            <Button
              primary
              className="ui left attached button"
              onClick={this.onSubmit}
            >
              Login
            </Button>
            <Button
              secondary
              className="right attached ui button"
              as={Link}
              to="/register"
              onClick={() => {}}
            >
              Register
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(LoginForm);
