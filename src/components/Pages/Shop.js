import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import DeactivatedMessage from "../Messages/DeactivatedMessage";

export class Shop extends Component {
  static propTypes = {
    isActivated: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  };

  render() {
    const { isActivated, name } = this.props;
    return (
      <Fragment>
        {!isActivated && <DeactivatedMessage />}
        <Typography variant="h5" align="left">
          Welcome, {name}
        </Typography>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isActivated: !!state.user.username,
    name: localStorage.username
  };
};

export default connect(mapStateToProps)(Shop);
