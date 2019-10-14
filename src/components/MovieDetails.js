import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails({ match, location }) {
  let { movieId } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=15fb98db6e1d0068744a1c7ec3ffd0c4&language=en-US`
      );
      setDetails({ ...response.data });
      console.log(response.data.spoken_languages[0].name);
      console.log(response.data.genres);
    };
    fetchMovieDetails();
  }, []);
  const movieGenres = () => {
    details.genres.map(item => {
      return <li>{item.name}</li>;
    });
  };
  return (
    <div className="row">
      <div className="col s3">
        <img src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} />
      </div>
      <div className="col s6">
        <h3>{details.title}</h3>
        <p>{details.tagline}</p>
        <div className="little_info">
          <p>Rating : {details.vote_average}</p>
          <p>
            {details.spoken_languages && details.spoken_languages[0].name} /{" "}
            {details.runtime} MIN / {details.release_date}
          </p>
        </div>
        <h4>The Genres</h4>
        <div className="genres">
          <ul>
            {details.genres && details.genres.map(item => <p>{item.name}</p>)}
          </ul>
        </div>
        <h4>The Synopsis</h4>
        <p>{details.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
