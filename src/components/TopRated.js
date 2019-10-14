import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Movie from "./Movie";
import "./MainSection.css";

export default function TopRated() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=15fb98db6e1d0068744a1c7ec3ffd0c4&language=en-US&page=1"
      );
      setMovies(result.data.results);
    };
    fetchMovies();
  }, []);
  let { id } = useParams();
  return (
    <div>
      <h1>Top Rated</h1>
      <div className="row">
        {movies.map(item => (
          <div className="col s3" key={item.id}>
            <Movie movie={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
