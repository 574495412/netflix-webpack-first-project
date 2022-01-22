import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

axiosInstance.interceptors.response.use(
  function (response) {
    
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
