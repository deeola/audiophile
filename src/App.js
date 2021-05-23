import "./css/style.css";
import Home from "./components/home/Home";
import Headphones from "./components/categories/Headphones";
import Speakers from "./components/categories/Speakers";
import Earphones from "./components/categories/Earphones";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React,{useState, useEffect} from 'react';
import axios from 'axios';
// import HeroShared from './components/categories/shared/HeroShared'

function App(props) {

  useEffect( async () => {
   const res = await axios.get('./data.json')

   console.log(res.data)

  })

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
          <Route  path="/headphones" render={(props) => <Headphones />} />
          <Route  path="/speakers" render={(props) => <Speakers />} />
          <Route  path="/earphones" render={(props) => <Earphones />} />



        </Switch>

        

        {/* <Headphones /> */}
      </div>
    </Router>
  );
}

export default App;
