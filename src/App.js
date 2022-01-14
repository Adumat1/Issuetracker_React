import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./Components/List";
import View from "./Components/View";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/edit" component={Edit} />
          <Route exact path="/view" component={View} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
