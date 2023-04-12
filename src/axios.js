import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-dbc67/us-central1/api", // THE API URL for the cloud functions.
});

export default instance;
