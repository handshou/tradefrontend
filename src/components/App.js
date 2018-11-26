import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import { Route } from "react-router-dom";
import { LocaleProvider } from "antd/lib"; // for js
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Shop from "./Pages/Shop";
import Register from "./Pages/Register";
import enUS from "antd/lib/locale-provider/en_US";
import UserRoute from "./Routes/UserRoute";
import GuestRoute from "./Routes/GuestRoute";

export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.username) {
    return { Authorization: user.username };
  } else {
    return { Authorization: "admin" };
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{ username: "loading" }]
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "GET",
      headers: {
        ...authHeader()
      }
    };
    fetch("http://localhost:8080/tb-war/webresources/users/", requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { location } = this.props;
    return (
      <Fragment>
        <LocaleProvider locale={enUS}>
          <Header />
        </LocaleProvider>
        <div className="ui container">
          <Route location={location} path="/" exact component={Home} />
          <GuestRoute
            location={location}
            path="/login"
            exact
            component={Login}
          />
          <GuestRoute
            location={location}
            path="/register"
            exact
            component={Register}
          />
          <UserRoute location={location} path="/shop" exact component={Shop} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
