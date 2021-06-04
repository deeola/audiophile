import "./css/style.css";
import Home from "./components/home/Home";
import Headphones from "./components/categories/Headphones";
import Speakers from "./components/categories/Speakers";
import Earphones from "./components/categories/Earphones";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import EarpodProduct from "./components/pdetails/productEarphone/Earpodyx";
import AudioState from "./context/Audiophile/AudioState";
import SpeakerOne from "./components/pdetails/productSpeaker/SpeakerOne.js/Speakerzx9";
import SpeakerTwo from "./components/pdetails/productSpeaker/SpeakerTwo/Speakerzx7";
import HeadphoneOne from "./components/pdetails/productHeadphone/HeadphoneOne/HeadphoneOne";
import HeadphoneTwo from "./components/pdetails/productHeadphone/HeadphoneTwo/HeadphoneTwo";
import HeadphoneThree from "./components/pdetails/productHeadphone/HeadphoneThree/HeadphoneThree";
import Basket from "./components/cart/Basket";
import Layer from "./components/home/Layer";
import Checkout from "./components/checkout/Checkout";
import Menu from "./components/layouts/Header/Menu";
import SecondLayer from "./components/home/SecondLayer";

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
            <Route path="/yx1" render={(props) => <EarpodProduct />} />
            <Route path="/zx9" render={(props) => <SpeakerOne />} />
            <Route path="/zx7" render={(props) => <SpeakerTwo />} />
            <Route path="/xx99-mark-one" render={(props) => <HeadphoneOne />} />
            <Route path="/xx99-mark-two" render={(props) => <HeadphoneTwo />} />
            <Route path="/xx59" render={(props) => <HeadphoneThree />} />
            <Route path="/cart" render={(props) => <Basket />} />
            <Route path="/checkout" render={(props) => <Checkout />} />
          </Switch>
          <Menu />
          <Basket />
          <Layer />
          <SecondLayer />
          
        </div>
      </Router>
    </AudioState>
  );
}

export default App;
