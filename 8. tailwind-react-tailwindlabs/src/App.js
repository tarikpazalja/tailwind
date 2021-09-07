import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import StranicaForma from "./pages/StranicaForma";
import StranicaFormaDruga from "./pages/StranicaFormaDruga";
import EmployeeCard from "./pages/EmployeeCard";
function App() {
  return (
    <Router>
      <div>
        <ul className="  flex justify-center space-x-2 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/forma">Forma</Link>
          </li>
          <li>
            <Link to="/formadruga">FormaDruga</Link>
          </li>
          <li>
            <Link to="/cardemployee">CardEmployee</Link>
          </li>
        </ul>

        <hr />

        {/*
      A <Switch> looks through all its children <Route>
      elements and renders the first one whose path
      matches the current URL. Use a <Switch> any time
      you have multiple routes, but you want only one
      of them to render at a time
    */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/forma">
            <StranicaForma />
          </Route>
          <Route path="/formadruga">
            <StranicaFormaDruga />
          </Route>
          <Route path="/cardemployee">
            <EmployeeCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
