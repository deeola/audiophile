import React from "react";
import Navbar from "../../shared/Navbar/Navbar";


import HeroShared from "./HeroShared";



function HeaderShared(props) {
  return (
    <div className="HeaderShared">
      <Navbar />
      <HeroShared />
    </div>
  );
}

export default HeaderShared;
