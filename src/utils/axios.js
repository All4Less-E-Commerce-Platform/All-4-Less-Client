import axios from "axios";

const BASE_UEL = "/api";
const fetcher = axios.create({
  baseURL: BASE_UEL,
});

export { fetcher, BASE_UEL };
