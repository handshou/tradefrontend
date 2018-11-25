import React, { Component } from "react";

export default class InlineError extends Component {
  render() {
    const { text } = this.props;
    return <span style={{ color: "#ae586" }}>{text}</span>;
  }
}
