import axios from "axios";

const BASE_UEL = "http://localhost:8080/api/v1";
const fetcher = axios.create({
  baseURL: BASE_UEL,
});

export { fetcher, BASE_UEL };
