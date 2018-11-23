import React, { Component } from "react";
import { Grid, Paper, withStyles } from "@material-ui/core";
import { Item } from "../Layouts";

const styles = {
  Root: {
    flexGrow: 1,
    display: "flex",
    overflow: "scroll"
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
    const { data } = this.props;
    return (
      <div className={styles.Root}>
        <Grid
          container
          direction="column"
          style={styles.Grid}
          justify="space-evenly"
          alignItems="stretch"
        >
          <Paper style={styles.Paper}>
            {data.map((user, key) => {
              return (
                <Grid key={key} item>
                  <Item key={key} styles={styles} name={user.username} />
                </Grid>
              );
            })}
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
