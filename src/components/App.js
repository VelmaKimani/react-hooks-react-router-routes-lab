import { Route, Switch } from "react-router-dom";

import Actors from "./Actors";
import Directors from "./Directors";
import Home from "./Home";
import Movies from "./Movies";
import NavBar from "./NavBar";
import React from "react";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/actors" component={Actors} />
        <Route path="/directors" component={Directors} />
        <Route path="/movies" component={Movies} />
      </Switch>
    </div>
  );
}



export default App;