import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class GuestRoute extends Component {
  render() {
    const { isActivated, component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          !isActivated ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isActivated: !!state.user.username
  };
}

export default connect(mapStateToProps)(GuestRoute);
