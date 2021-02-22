import axios from "axios";

// api key

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
