import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import AppContainer from "./components/AppContainer/index";

import "./index.scss";
import HomePage from "./pages/HomePage";

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <AppContainer>
            <Switch>
               <Route path="/" exact>
                  <HomePage />
               </Route>
               <Route path="*">404</Route>
            </Switch>
         </AppContainer>
      </Router>
   </React.StrictMode>,
   document.getElementById("root")
);
