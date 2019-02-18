import React from "react";
import Movie from "./Movie";
import { Route } from "react-router-dom";
import Search from "./Search";

const Content = props => {
  return (
    <React.Fragment>
      <div className="row content">
        {props.err.length > 0 ? (
          <React.Fragment>
            <div className="col-1" />
            <div className="alert alert-primary col-10 mt-4" role="alert">
              {props.err}
            </div>
            <div className="col-1" />
          </React.Fragment>
        ) : null}
        <Route
          path="/"
          render={Rprops => (
            <Search
              movies={props.movies}
              onSearchById={props.onSearchById}
              {...Rprops}
            />
          )}
          exact
        />
        <Route
          exact
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
