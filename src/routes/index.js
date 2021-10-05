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
        <Home authenticated={authenticated} />
      </Route>
      <Route exact path="/confraternizacao">
        <Confraternization authenticated={authenticated} />
      </Route>
      <Route exact path="/casamento">
        <Wedding authenticated={authenticated} />
      </Route>
      <Route exact path="/formatura">
        <Graduation authenticated={authenticated} />
      </Route>
    </Switch>
  );
}

export default Routes;
