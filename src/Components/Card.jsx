import React from "react";
import { Link } from "react-router-dom";
import poster from "../na.jpg";
const Card = props => {
  const src = props.movie.Poster === "N/A" ? poster : props.movie.Poster;
  return (
    <div
      className="card col-3 mr-4"
      onClick={() => {
        props.onSearchById(props.movie.imdbID);
      }}
    >
      <Link to={`/movie/${props.movie.imdbID}`}>
        <img src={src} className="card-img-top" alt="..." />
      </Link>
      <Link to={`/movie/${props.movie.imdbID}`}>
        <div className="card-body">
          <h5 className="card-title">{props.movie.Title}</h5>
        </div>
      </Link>
    </div>
  );
};

export default Card;
