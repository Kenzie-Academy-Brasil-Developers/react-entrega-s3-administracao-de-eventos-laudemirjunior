import { Route, Switch } from "react-router";
import Home from "../pages/home";
import Confraternization from "../pages/confraternization";
import Wedding from "../pages/wedding";
import Graduation from "../pages/graduation";

import { useState, useEffect } from "react";

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/confraternizacao">
        <Confraternization />
      </Route>
      <Route path="/casamento">
        <Wedding />
      </Route>
      <Route path="/formatura">
        <Graduation />
      </Route>
    </Switch>
  );
}

export default Routes;
