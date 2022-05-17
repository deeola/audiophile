import React,{useEffect} from "react";
import ProductNav from "../components/shared/Navbar/ProductNav";
import Checkout from "../components/Checkouts/Checkout";
import Footer from "../components/shared/Footer/Footer";
import { CheckoutBackground } from "./homestyling";

const Checkoutpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <ProductNav />
      <CheckoutBackground>
      <Checkout />
      </CheckoutBackground>

 

      <Footer />
    </div>
  );
};

export default Checkoutpage;

