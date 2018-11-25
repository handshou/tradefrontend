import axios from "axios";
const backend = "http://localhost:8080/tb-war/webresources";

export default {
  user: {
    login: credentials =>
      axios.post(backend + "/user/login", { credentials }).then(res => res.data)
  }
};
