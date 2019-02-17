import React from "react";
import Movie from "./Movie";
import { Route } from "react-router-dom";
import Search from "./Search";

const Content = props => {
  return (
    <React.Fragment>
      <div className="row content">
        <Route path="/" component={Search} />
        <Route
          path="/movie/:id"
          render={Rprops => (
            <Movie
              movie={props.movie}
              onLiked={props.onLiked}
              likedMovies={props.likedMovies}
              {...Rprops}
            />
          )}
        />
      </div>
      <div className="row foot">
        <p className="col-12">Design And Created By Ravi Ranjan Singh</p>
      </div>
    </React.Fragment>
  );
};

export default Content;
