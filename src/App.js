
import React, {} from "react";
import {BrowserRouter as Router,Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Search from "./routes/Search";
import List from "./routes/List";
import "./style.css"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/movie/:id">
          <Detail></Detail>
        </Route>

        <Route exact path="/search">
          <Search></Search>
        </Route>

        <Route exact path="/list/:genres">
          <List></List>
        </Route>


        <Route exact path="/">
          <Home></Home>
        </Route>


    </Router>
  );
}

export default App;
