import React from "react";
import {Link} from 'react-router-dom';

function EarSection(props) {
  return (
    <div>
      <section className="HeadphoneSection">
        <div className="HeadImageOne">
          <img src={require('../../../assets/category-earphones/desktop/earphoneDesktop.jpg').default}  alt='earphone section'></img>
          <img style={{display:'none'}} src={require('../../../assets/category-earphones/tablet/image-yx1-earphones.jpg').default} alt='earphone section'></img>
          <img style={{display:'none'}}  src={require('../../../assets/category-earphones/mobile/image-yx1-earphones.jpg').default}  alt='earphone section'></img>
        </div>
        <div className="SectionText sectionOne">
          <h2 className="SectionMainTitle">YX1 wireless earphones</h2>
          <p className="sectionPara">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <Link to='/yx1' className="sectionButton">SEE PRODUCT</Link>
        </div>
      </section>
    </div>
  );
}

export default EarSection;
