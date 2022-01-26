import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosConfig/axiosConfig";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";
import "./movie.css";

const MovieDetails = (props) => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const key = "8487f1af98e2b9881229cc0b7d24bb44";
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}?api_key=${key}`)
      .then((response) => {
        setMovie(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  const loader = useSelector((state) => state.Load.loader);

  return (
    <>
      <div className="con">
        <div className="fadediv2">
          <div className="pagecontent">
            <div className="container fadecon">
              {loader && <Loading />}
              <div id={this.props.id}>
                <h1>{this.props.title}</h1>
                <span>{this.props.adult}</span>
                <img src={this.props.image} alt="movie poster" />
                <p>{this.props.overview}</p>
                <div>
                  <span>{this.props.voteAvg}</span>
                  <span>{this.props.voteCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetails;
