/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./movie.css";
import { Link } from "react-router-dom";

function MovieCard(props) {
  return (
    <>
      <div
        id={props.id}
        className="card movie-card flex-column justify-content-between"
      >
        <div className="d-flex justify-content-between">
          <span className="rating ps-2">{props.rate}</span>
          <span className="date pe-2 mt-4">{props.release_date}</span>
        </div>

        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <div className="position-relative">
            <img
              src={`https://image.tmdb.org/t/p/w500/${props.image}`}
              width="auto"
              height="300"
              className="card-img-top"
              alt="photo"
            />
            <i className="far fa-star ratestar position-absolute top-100 start-50 translate-middle"></i>
          </div>
          <div className="d-flex justify-content-around  mt-4">
            <Link
              to={`/movie-details/${props.id}`}
              key={props.id}
              className="btn watch"
            >
              see more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;