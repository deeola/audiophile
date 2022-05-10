import React from "react";
import Main from "../layouts/Bodylayout/Main";
import MainHero from "../shared/Hero/MainHero";
import Footer from "../shared/Footer/Footer";

function Home(props) {
  return (
    <div className="mainDiv">
      <MainHero />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
