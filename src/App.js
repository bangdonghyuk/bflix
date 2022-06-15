
import React, {} from "react";
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/movie/:id">
          <Detail></Detail>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>
    </Router>
  );
}

export default App;
