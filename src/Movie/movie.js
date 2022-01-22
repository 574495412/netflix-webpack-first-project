import React, { useState, useEffect } from "react";
import MovieCard from "./moviecard";
import "./movie.css";
import Loading from "../Loading/Loading";
import axiosInstance from "../axiosConfig/axiosConfig";
import { useSelector } from "react-redux";

function Movie() {
  let [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const key = "8487f1af98e2b9881229cc0b7d24bb44";
  useEffect(() => {
    axiosInstance
      .get(`/movie/popular?api_key=${key}&page=${page}`)
      .then((response) => {
        const allMovies = response.data.results;
        setMovies(allMovies);
      })
      .catch((error) => console.log(error));
  }, [page]);

  let nextBtn = () => {
    setPage(++page);
    console.log(page);
  };

  let prevBtn = () => {
    setPage(--page);
    console.log(page);
  };

  const loader = useSelector((state) => state.loader);

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {loader && <Loading />}
        </div>
        <div className="row d-flex justify-content-between mt-3">
          <button onClick={() => prevBtn()} className="btn page-button ms-5">
            <i class="fas fa-angle-left me-2"></i>Previous
          </button>
          <button onClick={() => nextBtn()} className="btn page-button me-5">
            Next
            <i class="fas fa-angle-right ms-2"></i>
          </button>
        </div>
        <div className="row movie-page-content">
          {movies.map((movie, index) => (
            <div key={index} className="col-md-4">
              <MovieCard
                title={movie.title}
                release_date={movie.release_date}
                rate={movie.vote_average}
                image={movie.poster_path}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Movie;
