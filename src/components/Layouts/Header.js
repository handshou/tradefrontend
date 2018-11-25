import React, { Component } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuButton from "./MenuButton";
import { Link } from "react-router-dom";
import { Complete } from "./";
import { connect } from "react-redux";

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
    const { classes, isAuthenticated } = this.props;
    const LoginLink = props => <Link to="/login" {...props} />;
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
              Trade
            </Typography>
            {!isAuthenticated ? (
              <Button color="inherit" component={LoginLink}>
                Login
              </Button>
            ) : (
              <MenuButton />
            )}
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

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.username
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Header));
