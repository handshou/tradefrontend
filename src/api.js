import axios from "axios";
export const backend = "http://localhost:8080/tb-war/webresources";

export default {
  user: {
    login: credentials =>
      axios
        .post(backend + "/user/login", { credentials })
        .then(res => res.data),
    register: userInfo =>
      axios.post(backend + "/user", { ...userInfo }).then(res => res.data)
  }
};
