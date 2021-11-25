import "./App.css";
import React from "react";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Protected from "./components/Protected";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/dashboard">
            {/* <Protected components={Dashboard} /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
