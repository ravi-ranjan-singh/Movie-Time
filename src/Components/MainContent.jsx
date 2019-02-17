import React from "react";

const MainContent = props => {
  console.log(props);
  return (
    <div className="col-lg-8 col-sm-12 main-content">
      <div className="row">
        <h1 className="col-12">{props.movie.title}</h1>
      </div>
      <div className="row">
        <p className="text-center col-12 mb-2">
          <i
            className={
              props.likedMovies.includes(props.movie.title) === true
                ? "fas fa-heart"
                : "far fa-heart"
            }
            onClick={() => {
              props.onLiked(props.movie.title);
            }}
          />
        </p>
      </div>
      <div className="row">
        <p className="col-12">
          <strong>Genre</strong>
          <br />
          {props.movie.genre}
        </p>
      </div>
      <div className="row">
        <p className="col-12">
          <strong> Director</strong>
          <br />
          {props.movie.director}
        </p>
      </div>
      <div className="row">
        <p className="col-12">
          <strong> Actors</strong>
          <br />
          {props.movie.actors}
        </p>
      </div>
      <div className="row">
        <p className="col-12">
          <strong> Plot</strong>
          <br />
          <em>{props.movie.plot}</em>
        </p>
      </div>
    </div>
  );
};

export default MainContent;
