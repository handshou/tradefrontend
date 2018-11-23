import React, { Component, Fragment } from "react";
import { Paper } from "@material-ui/core";

class Item extends Component {
  render() {
    const { styles, name, desc, price } = this.props;
    return (
      <Fragment>
        <Paper style={styles.Paper}>
          {name}
          {desc}
          {price}
        </Paper>
      </Fragment>
    );
  }
}

export default Item;