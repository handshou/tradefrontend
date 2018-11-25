import React, { Component } from "react";
import { Grid, Paper, withStyles } from "@material-ui/core";
import { Item } from "../Layouts";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const styles = {
  Root: {
    flexGrow: 1,
    display: "flex",
    overflow: "scroll",
    background: "white"
  },
  Paper: {
    padding: 20,
    marginBottom: 10
  },
  Grid: {
    flexGrow: 1,
    display: "flex",
    overflow: "scroll",
    marginBottom: 25
  }
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  render() {
    // const { data } = this.props;
    const data = [{ username: "loading" }];
    const { isAuthenticated } = this.props;
    return (
      <div className={styles.Root}>
        {isAuthenticated ? (
          <button>logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Grid
          container
          direction="column"
          style={styles.Grid}
          justify="space-evenly"
          alignItems="stretch"
        >
          {data.map((user, key) => {
            return (
              <Grid key={key} item>
                <Item key={key} styles={styles} name={user.username} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.username
  };
}

export default connect(mapStateToProps)(Home);
