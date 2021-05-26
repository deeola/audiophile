import "./css/style.css";
import Home from "./components/home/Home";
import Headphones from "./components/categories/Headphones";
import Speakers from "./components/categories/Speakers";
import Earphones from "./components/categories/Earphones";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import EarpodProduct from "./components/pdetails/productEarphone/Earpodyx";
import AudioState from "./context/Audiophile/AudioState";
import SpeakerOne from './components/pdetails/productSpeaker/SpeakerOne.js/Speakerzx9';
import SpeakerTwo from './components/pdetails/productSpeaker/SpeakerTwo/Speakerzx7'

function App(props) {

  return (
    <AudioState>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={(props) => <Home />} />
            <Route path="/headphones" render={(props) => <Headphones />} />
            <Route path="/speakers" render={(props) => <Speakers />} />
            <Route path="/earphones" render={(props) => <Earphones />} />
            <Route
              path="/yx1"
              render={(props) => <EarpodProduct  />}
            />
            <Route
              path="/zx9"
              render={(props) => <SpeakerOne  />}
            />
            <Route
              path="/zx7"
              render={(props) => <SpeakerTwo  />}
            />
          </Switch>
        </div>
      </Router>
    </AudioState>
  );
}

export default App;
