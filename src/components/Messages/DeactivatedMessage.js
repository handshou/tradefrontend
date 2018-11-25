import React, { Component } from "react";
import { Message } from "semantic-ui-react";

export default class DeactivatedMessage extends Component {
  render() {
    return (
      <Message warning>
        <Message.Header>Account deactivated</Message.Header>
        Please contact an administrator at hello@trade.com.
      </Message>
    );
  }
}
