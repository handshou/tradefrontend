import React, { Component } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuButton from "./MenuButton";
import { Link } from "react-router-dom";
import { Complete } from "./";
import { connect } from "react-redux";
import TradeIcon from "../Images/shopping-bag-flat.png";

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: "105px"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  button: {
    borderRadius: 1,
    border: 0,
    color: "white",
    height: 15,
    padding: "0 20px"
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
    this.console.log("Title clicked!");
  };

  render() {
    const { classes, isLoggedIn } = this.props;
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
              <div className="ui horizontal list">
                <div className="item">
                  <img
                    className="ui mini circular image"
                    style={{ width: "28px" }}
                    src={TradeIcon}
                  />
                  <div className="content">
                    <div className="ui sub grey inverted header">Trade</div>
                    I'm addicted to shopping
                  </div>
                </div>
              </div>
            </Typography>
            {!isLoggedIn ? (
              <Button
                style={styles.button}
                variant="text"
                color="inherit"
                component={LoginLink}
              >
                Login
              </Button>
            ) : (
              <MenuButton
                style={{
                  display: "absolute",
                  justifyContent: "right",
                  alignItems: "right"
                }}
              />
            )}
          </Toolbar>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {isLoggedIn ? <Complete style={{ width: "100%" }} /> : ""}
          </div>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.user.username
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Header));
