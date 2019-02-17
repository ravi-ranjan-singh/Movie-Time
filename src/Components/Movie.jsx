import React from "react";
import SecondaryContent from "./SecondaryContent";
import MainContent from "./MainContent";

const Movie = props => {
  return (
    <React.Fragment>
      <SecondaryContent movie={props.movie} />
      <MainContent
        movie={props.movie}
        onLiked={props.onLiked}
        likedMovies={props.likedMovies}
      />
    </React.Fragment>
  );
};

export default Movie;
