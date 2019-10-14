import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Popular from "./Popular";
import Upcoming from "./Upcoming";
import TopRated from "./TopRated";
import MoviesList from "./MoviesList";
import MovieDetails from "./MovieDetails";
import "./MainSection.css";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => {}
  }
];
export default function MainSection() {
  return (
    <div className="MainSection">
      <a className="btn-floating btn-small waves-effect waves-light black">
        <i className="material-icons">search</i>
      </a>
      <Router>
        <Switch>
          <Route exact path="/">
            <Popular />
          </Route>
          <Route exact path="/upcoming">
            <Upcoming />
          </Route>
          <Route exact path="/top rated">
            <TopRated />
          </Route>
          <Route path="/movie/:id">
            <MovieDetails />
          </Route>
          <Route path="/:id" children={<MoviesList />}></Route>
        </Switch>
      </Router>
    </div>
  );
}
