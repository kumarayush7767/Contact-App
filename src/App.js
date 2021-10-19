import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route exact path="/" component={()=> <Home/>} />
        <Route  path="/add">
          <h1>i am add component</h1>
        </Route>
        <Route path="/edit/:id">
          <h1>i am edit component</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
