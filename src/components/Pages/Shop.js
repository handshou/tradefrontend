import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DeactivatedMessage from "../Messages/DeactivatedMessage";

export class Shop extends Component {
  static propTypes = {
    isActivated: PropTypes.bool.isRequired
  };

  render() {
    const { isActivated } = this.props;
    return (
      <Fragment>
        {!isActivated && <DeactivatedMessage />}
        Hello there this is Shop
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isActivated: !!state.user.username
  };
};

export default connect(mapStateToProps)(Shop);