import "./css/style.css";
import Home from "./components/home/Home";
import Headphoness from "./components/categories/Headphones";
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
            <Route exact path="/" render={() => <Home />} />
            <Route path="/headphones" render={() => <Headphoness />} />
            <Route path="/speakers" render={() => <Speakers />} />
            <Route path="/earphones" render={() => <Earphones />} />
            <Route path="/yx1" render={() => <EarpodProduct />} />
            <Route path="/zx9" render={() => <SpeakerOne />} />
            <Route path="/zx7" render={() => <SpeakerTwo />} />
            <Route path="/xx99-mark-one" render={() => <HeadphoneOne />} />
            <Route path="/xx99-mark-two" render={() => <HeadphoneTwo />} />
            <Route path="/xx59" render={() => <HeadphoneThree />} />
            <Route path="/cart" render={() => <Basket />} />
            <Route path="/checkout" render={() => <Checkout />} />
          </Switch>
          <Menu />
          <Basket />
          {/* <Layer /> */}
          {/* <SecondLayer /> */}
          
        </div>
      </Router>
    </AudioState>
  );
}

export default App;
