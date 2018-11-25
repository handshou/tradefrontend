import React, { Component, Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import toRenderProps from "recompose/toRenderProps";
import withState from "recompose/withState";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

class MenuButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const WithState = toRenderProps(
      withState("anchorEl", "updateAnchorEl", null)
    );
    const { handleLogout } = this.props;

    return (
      <WithState>
        {({ anchorEl, updateAnchorEl }) => {
          const open = Boolean(anchorEl);
          const handleClose = () => {
            updateAnchorEl(null);
          };

          return (
            <Fragment>
              <IconButton
                aria-owns={open ? "render-props-menu" : undefined}
                aria-haspopup="true"
                onClick={event => {
                  updateAnchorEl(event.currentTarget);
                }}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="render-props-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
              </Menu>
            </Fragment>
          );
        }}
      </WithState>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.username
  };
}

export default connect(
  mapStateToProps,
  { handleLogout: actions.logout }
)(MenuButton);
