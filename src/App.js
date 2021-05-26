import "./css/style.css";
import Home from "./components/home/Home";
import Headphones from "./components/categories/Headphones";
import Speakers from "./components/categories/Speakers";
import Earphones from "./components/categories/Earphones";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import EarpodProduct from "./components/pdetails/productEarphone/Earpodyx";
import AudioState from "./context/Audiophile/AudioState";
import SpeakerOne from "./components/pdetails/productSpeaker/SpeakerOne.js/Speakerzx9";
import SpeakerTwo from "./components/pdetails/productSpeaker/SpeakerTwo/Speakerzx7";
import HeadphoneOne from "./components/pdetails/productHeadphone/HeadphoneOne/HeadphoneOne";
import HeadphoneTwo from "./components/pdetails/productHeadphone/HeadphoneTwo/HeadphoneTwo";
import HeadphoneThree from "./components/pdetails/productHeadphone/HeadphoneThree/HeadphoneThree";
import Basket from "./components/cart/Basket";

function App(props) {
  
  const [cartItems, setCartItems] = useState([]);


  //On ADD
  const onAdd = (product) => {
    const exist = cartItems.find( x => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else{
      setCartItems([...cartItems, {...product, qty:1}])
    }
  };


  

  const onRemove= (product) => {
    const exist = cartItems.find( x => x.id === product.id);

    if (exist.qty === 1) {
      setCartItems(
        cartItems.filter((x) =>
          x.id !== product.id
        )
      );
    } else{
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  //ON REMOVE

  return (
    <AudioState>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={(props) => <Home  countCartItems={cartItems.length} />} />

            <Route path="/headphones" render={(props) => <Headphones countCartItems={cartItems.length}  />} />
            <Route path="/speakers" render={(props) => <Speakers countCartItems={cartItems.length}  />} />
            <Route path="/earphones" render={(props) => <Earphones countCartItems={cartItems.length}  />} />
            <Route path="/yx1" render={(props) => <EarpodProduct onRemove={onRemove} countCartItems={cartItems.length} onAdd={onAdd} />} />
            <Route path="/zx9" render={(props) => <SpeakerOne onRemove={onRemove} countCartItems={cartItems.length} onAdd={onAdd} />} />
            <Route path="/zx7" render={(props) => <SpeakerTwo onRemove={onRemove} countCartItems={cartItems.length} onAdd={onAdd} />} />
            <Route path="/xx99-mark-one" render={(props) => <HeadphoneOne onRemove={onRemove} countCartItems={cartItems.length} onAdd={onAdd} />} />
            <Route path="/xx99-mark-two" render={(props) => <HeadphoneTwo onRemove={onRemove} countCartItems={cartItems.length} onAdd={onAdd} />} />
            <Route path="/xx59" render={(props) => <HeadphoneThree onRemove={onRemove} countCartItems={cartItems.length} onAdd={onAdd} />} />
            <Route
              path="/cart"
              render={(props) => <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>}
            />
          </Switch>
        </div>
      </Router>
    </AudioState>
  );
}

export default App;
