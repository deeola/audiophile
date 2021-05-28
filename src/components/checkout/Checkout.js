import React,{useState} from "react";
import Footer from "../layouts/footer/Footer";
import Navbar from "../layouts/Header/Navbar";
import FormCheckout from "./FormCheckout";
import LayoutCheck from "./LayoutCheck";
import Success from "./Success";
import Summary from "./Summary";

function Checkout(props) {
  const {
    openCHECKOUT,
    cartItems,
    onAdd,
    onRemove,
    openBucket,
    myBucketDisplay,
    removeAll
  } = props;


  //SET SUCCESS MODAL
  const [successDisplay, setSuccessDisplay] = useState({

      display:'none'

  });



  //Open
  const continueAndPay = () => {
    setSuccessDisplay({

        display:'block'

    });

    console.log(successDisplay)
  };



  const openBuckets = () => {
    return setSuccessDisplay ? {} : { display: "none" };
  };



  return (
    <div >
      <div
        className="productnav"
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "97px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar />
      </div>
      <FormCheckout continueAndPay={continueAndPay} />
      <Footer />
      <Success successDisplay={successDisplay}  removeAll={removeAll} />
      <LayoutCheck successDisplay={successDisplay}  />
    </div>
  );
}

export default Checkout;
