import { GET_STORES_SUCCESS, GET_STORES_FAILURE } from "../types";
import axios from "axios";
import api, { backend } from "../api";

export default {
  stores: users =>
    axios.get(backend + "/stores", { users }).then(res => res.data)
};
