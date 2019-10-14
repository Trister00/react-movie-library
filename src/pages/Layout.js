import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import MainSection from "../components/MainSection";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Popular from "../components/Popular";
import Upcoming from "../components/Upcoming";
import TopRated from "../components/TopRated";
import MoviesList from "../components/MoviesList";
import "../components/Movie.css";

export default function Layout() {
  const [openSearch, setOpenSearch] = useState(true);
  const openBar = () => {
    setOpenSearch(!openSearch);
  };
  return (
    <div>
      <SideBar />
      {openSearch ? (
        <div className="MainSection">
          <a
            className="btn-floating btn-small waves-effect waves-light black"
            onClick={openBar}
          >
            <i className="material-icons">search</i>
          </a>
        </div>
      ) : (
        // <div className="container">
        <div className="search-mechanisme">
          <div class="input-field ">
            <input id="first_name" type="text" class="validate" />
            <label for="first_name">Search for movie</label>
          </div>
          {/* </div> */}
          <a
            className="btn-floating btn-small waves-effect waves-light black"
            onClick={openBar}
          >
            <i className="material-icons">close</i>
          </a>
        </div>
      )}
      }
      {/* <div className="MainSection">
        <a className="btn-floating btn-small waves-effect waves-light black" onClick={openSearch}>
          <i className="material-icons">search</i>
        </a>
      </div> */}
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Popular />
          </Route>
          <Route path="/popular">
            <Popular />
          </Route>
          <Route path="/upcoming">
            <Upcoming />
          </Route>
          <Route path="/top rated">
            <TopRated />
          </Route>
          <Route path="/:id">
            <MoviesList />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
