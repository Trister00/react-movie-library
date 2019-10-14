import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SideBar.css";
import MyLogo from "../my_logo.svg";

export default function SideBar() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchGenre = async () => {
      const result = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=15fb98db6e1d0068744a1c7ec3ffd0c4&language=en-US"
      );
      setGenres(result.data.genres);
    };
    fetchGenre();
  }, []);
  return (
    <div>
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background">
              <img alt="" />
            </div>
            <a href="#user">
              <img className="circle my-logo" src={MyLogo} alt="img logo" />
            </a>
          </div>
        </li>
        <li>
          <h4>Discover</h4>
        </li>
        <li>
          <Link to="/popular">
            <i className="material-icons">apps</i>Popular
          </Link>
        </li>
        <li>
          <Link to="/top rated">
            <i className="material-icons">photo_filter</i>Top Rated
          </Link>
        </li>
        <li>
          <Link to="/upcoming">
            <i className="material-icons">access_alarm</i>Upcoming
          </Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <h4>Genres</h4>
        </li>
        {genres.map(item => (
          <li key={item.id}>
            <Link to={`/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
