import axios from "axios";

const instance = axios.create({
  baseURL: "...", // THE API URL for the cloud functions.
});

export default instance;
