import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import { LocaleProvider } from "antd/lib"; // for js
import Home from "./Home/Home";
import enUS from "antd/lib/locale-provider/en_US";

export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { Authorization: user.token };
  } else {
    return { Authorization: "admin" };
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
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
    const { data } = this.state;
    return (
      <Fragment>
        <LocaleProvider locale={enUS}>
          <Header />
        </LocaleProvider>
        <Home data={data} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
