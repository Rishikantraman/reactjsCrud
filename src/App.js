import "./App.css";
import React from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Protected from "./components/Protected";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Protected components={Dashboard} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
