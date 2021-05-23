import React from "react";
import PropTypes from "prop-types";
import earphoneDesktop from "../../../assets/category-earphones/desktop/earphoneDesktop.jpg";

function EarSection(props) {
  return (
    <div>
      <section className="HeadphoneSection">
        <div className="HeadImageOne">
          <img src={earphoneDesktop}></img>
        </div>
        <div className="SectionText sectionOne">
          <p className="newProductSec">NEW PRODUCT</p>
          <h2 className="SectionMainTitle">YX1 wireless earphones</h2>
          <p className="sectionPara">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <button className="sectionButton">SEE PRODUCT</button>
        </div>
      </section>
    </div>
  );
}

export default EarSection;
