import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import toRenderProps from "recompose/toRenderProps";
import withState from "recompose/withState";
import AccountCircle from "@material-ui/icons/AccountCircle";

class MenuButton extends Component {
  render() {
    const WithState = toRenderProps(
      withState("anchorEl", "updateAnchorEl", null)
    );

    return (
      <WithState>
        {({ anchorEl, updateAnchorEl }) => {
          const open = Boolean(anchorEl);
          const handleClose = () => {
            updateAnchorEl(null);
          };

          return (
            <React.Fragment>
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
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </React.Fragment>
          );
        }}
      </WithState>
    );
  }
}

export default MenuButton;
