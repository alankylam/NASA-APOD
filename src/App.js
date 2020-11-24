
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home.js";
import NASAPhoto from "./components/NASAPhoto.js"
import './App.css';

function App() {
  return (
      <Router>
          <div className="app">
              <Route component={Home} path="/" exact />
              <Route component={NASAPhoto} path="/nasaphoto" />
          </div>
      </Router>
  );
}

export default App;
