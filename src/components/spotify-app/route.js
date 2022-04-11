import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

function Routing() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/create-playlist">Create Playlist</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/create-playlist">
            <Playlist />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Playlist() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Create Playlist</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:listId`}>
          <List />
        </Route>
        <Route path={match.path}>
          <h3>Please Create Playlist.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function List() {
  let { listId } = useParams();
  return <h3>Requested topic ID: {listId}</h3>;
}

export default Routing;
