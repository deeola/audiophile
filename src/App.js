import "./css/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Layer from "./components/home/Layer";
import Menu from "./components/layouts/Header/Menu";
import SecondLayer from "./components/home/SecondLayer";
import MarkOne from "./pages/MarkOne";
import MarkTwo from "./pages/MarkTwo";
import MarkThree from "./pages/MarkThree";
import Speakerone from "./pages/Speakerone";
import Speakertwo from "./pages/Speakertwo";
import Earphone from "./pages/Earphone";
import Homepage from "./pages/Homepage";
import HeadphonePage from "./pages/HeadphonePage";
import SpeakersPage from "./pages/SpeakersPage";
import EarphonePage from "./pages/EarphonePage";
import Cart from "./components/Basket/Cart";
import Checkoutpage from "./pages/Checkoutpage";


function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
          <Route path="/headphones" render={() => <HeadphonePage />} />
          <Route path="/speakers" render={() => <SpeakersPage />} />
          <Route path="/earphones" render={() => <EarphonePage />} />
          <Route path="/yx1" render={() => <Earphone />} />
          <Route path="/zx9" render={() => <Speakerone />} />
          <Route path="/zx7" render={() => <Speakertwo />} />
          <Route path="/xx99-mark-one" render={() => <MarkOne />} />
          <Route path="/xx99-mark-two" render={() => <MarkTwo />} />
          <Route path="/xx59" render={() => <MarkThree />} />
          <Route path="/cart" render={() => <Cart />} />
          <Route path="/checkout" render={() => <Checkoutpage />} />
        </Switch>
        <Menu />
        <Cart />
        {/* <Checkout /> */}
        {/* <Layer /> */}
        {/* <SecondLayer /> */}
      </div>
    </Router>
  );
}





export default App;


