import React, { Component } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuButton from "./MenuButton";
import { Complete } from "./";

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: "90px"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleTitleClick = this.handleTitleClick.bind(this);

    this.state = {
      newValue: ""
    };
  }

  // not working
  handleTitleClick = () => {
    console.log("Title clicked!");
  };

  render() {
    const { classes } = this.props;
    const showMenu = false;
    return (
      <div className={classes.root}>
        <AppBar
          className="appbar"
          style={{
            position: "fixed",
            top: "0",
            width: "100%"
          }}
          title="Trade Bucket"
          position="static"
          onClick={() => this.handleTitleClick}
        >
          <Toolbar>
            <Typography variant="h5" color="inherit" className={classes.grow}>
              Trade Bucket
            </Typography>
            {showMenu ? <Button color="inherit">Login</Button> : <MenuButton />}
          </Toolbar>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Complete style={{ width: "100%" }} />
          </div>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
