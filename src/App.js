import React from "react";
import Navbar from "./navBar";
import Student from "./Student";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Navbar />
      <Switch>
        <Route path="/Students" render={() => <Student />} />
      </Switch>
    </div>
  );
}

export default App;
