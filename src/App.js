import React from "react";
import AuthorPage from "./AuthorPage";
import AnimalPage from "./AnimalPage";
import PageNotFound from "./PageNotFound";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: ["cats", "chickens", "cows", "dogs", "pigs"]
    };
  }
  render() {
    return (
      <Router>
        <h1>Assignment 6: Client-Side Routing</h1>
        <div className="left-nav">
          <nav>
            <ul>
              {this.state.animals.map((animal, i) => {
                return (
                  <li key={i}>
                    <NavLink to={`/animals/${animal}`}>{animal}</NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/" exact={true} />
          <Route path="/authors/:author" component={AuthorPage} />
          {this.state.animals.map((animal, i) => {
            return (
              <Route path={`/animals/${animal}`} key={i}>
                <AnimalPage animal={animal} />
              </Route>
            );
          })}
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
