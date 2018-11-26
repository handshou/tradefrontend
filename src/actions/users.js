import { userLoggedIn } from "./auth";
import api from "../api";

export const register = userInfo => dispatch =>
  api.user.register(userInfo).then(user => {
    dispatch(userLoggedIn(user));
  });
