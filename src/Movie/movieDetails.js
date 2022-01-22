import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./movie.css";
import axiosInstance from "../axiosConfig/axiosConfig";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}?api_key=8487f1af98e2b9881229cc0b7d24bb44`)
      .then((response) => {
        setMovie(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const loader = useSelector((state) => state.loader);

  return (
    <>
      <div className="con">
        <div className="fadediv2">
          <div className="pagecontent">
            <div className="container fadecon">
              {loader && <Loading />}
              <div id={movie.id}>
                <h1>{movie.title}</h1>
                <img src={movie.image} alt="movie poster" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetails;
