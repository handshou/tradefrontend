import React, { Component, Fragment } from "react";
import {
  withStyles,
  BottomNavigationAction,
  BottomNavigation
} from "@material-ui/core";

import ShopIcon from "@material-ui/icons/ShoppingBasket";
import StoreIcon from "@material-ui/icons/Store";
import CartIcon from "@material-ui/icons/ShoppingCart";

const styles = {
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    margin: "100"
  }
};

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <Fragment>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          style={styles.stickToBottom}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            label="Shop"
            value="recents"
            icon={<ShopIcon />}
          />
          <BottomNavigationAction
            label="Store"
            value="favorites"
            icon={<StoreIcon />}
          />
          <BottomNavigationAction
            label="Cart"
            value="nearby"
            icon={<CartIcon />}
          />
        </BottomNavigation>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Footer);
