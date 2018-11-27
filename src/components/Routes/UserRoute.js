import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class UserRoute extends Component {
  render() {
    const { isLoggedIn, component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.user.username
  };
}

export default connect(mapStateToProps)(UserRoute);
