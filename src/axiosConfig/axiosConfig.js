import axios from "axios";
import store from "../store/Store";
import loaderStatus from "../store/Action";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

axiosInstance.interceptors.request.use(
  function (request) {
    store.dispatch(loaderStatus(true));
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    store.dispatch(loaderStatus(false));
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
