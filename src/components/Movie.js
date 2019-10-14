import React from "react";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
        </div>
        <div className="card-content">
          <p>{movie.overview.substr(0, 50)}...</p>
        </div>
        <div className="card-action grey-text text-darken-4">
          <Link to={`${movie.id}`} className="text-darken-3">
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
}
