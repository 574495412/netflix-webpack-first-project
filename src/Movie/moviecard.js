/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./movie.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FavReducer from "../Redux/Reducers/FavReducer";

function MovieCard(props) {
  const dispatch = useDispatch;
  const favorite = useSelector((state) => state.Favorite.favorite);
  const addToFav = () => {
    dispatch(FavReducer(favorite === false ? true : false));
  };

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

        <div className="card-body p-1">
          <h5 className="card-title">{props.title}</h5>
          <div className="position-relative">
            <img
              src={`https://image.tmdb.org/t/p/w500/${props.image}`}
              width="auto"
              height="275"
              className="card-img-top"
              alt="photo"
            />
            <i
              className="far fa-star ratestar position-absolute top-100 start-50 translate-middle"
              style={
                favorite === false ? { fontWeight: 100 } : { fontWeight: 900 }
              }
            >
              <button onClick={() => addToFav()}></button>
            </i>
          </div>
          <div className="d-flex justify-content-around  mt-5">
            <Link to={`/details/${props.id}`} className="btn watch">
              see more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
