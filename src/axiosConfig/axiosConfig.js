import axios from "axios";
import store from "../Redux/Store/Store";
import loadReducer from "../Redux/Reducers/LoadReducer";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

axiosInstance.interceptors.request.use(
  function (request) {
    store.dispatch(loadReducer(true));
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    store.dispatch(loadReducer(false));
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
