import React, { Component } from "react";
import BeerList from "./BeerList";
import BeerDetails from "./BeerDetails";
import { Route, Switch } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route path="/beer/:id" component={BeerDetails} />
        <Route path="/" component={BeerList} />
      </Switch>
      </div>
    )
  }
}
export default Main;