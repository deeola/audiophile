import React from "react";
import Header from "../layouts/Header/Header";
import Main from "../layouts/Bodylayout/Main";
import Footer from "../layouts/footer/Footer";
import Headphones from "../Category/Headphones/Headphones";
import MainHero from "../shared/Hero/MainHero";

function Home(props) {
  return (
    <div className="mainDiv">
      <MainHero />
      {/* <Header /> */}
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
