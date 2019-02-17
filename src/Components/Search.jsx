import React from "react";
import Card from "./Card";
const Search = props => {
  const { movies, onSearchById } = props;
  return (
    <div className="col-12">
      <div className="row mt-5">
        {movies.map(movie => (
          <Card key={movie.imdbID} movie={movie} onSearchById={onSearchById} />
        ))}
      </div>
    </div>
  );
};

export default Search;
