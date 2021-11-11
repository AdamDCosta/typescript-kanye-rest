import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import HomeView from "../src/Views/home/HomeView";
// import HomeViewNotFound from "./Views/notFound/NotFoundView";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element = {<HomeView />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
