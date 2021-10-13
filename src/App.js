import './App.css';
import React from "react";
import Login from './components/login';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path ="/dashboard">
            <Dashboard/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;