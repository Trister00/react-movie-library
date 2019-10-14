import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Movie from "./Movie";
import "./MainSection.css";
import axios from "axios";

export default function Popular() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=15fb98db6e1d0068744a1c7ec3ffd0c4&language=en-US&page=1"
      );
      setMovies(result.data.results);
    };
    fetchMovies();
  }, []);
  let { name } = useParams();
  return (
    <div>
      <div className="row">
        <h1>Popular</h1>
      </div>

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
