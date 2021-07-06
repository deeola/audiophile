import React from "react";
import { Link } from "react-router-dom";
function SpeakerSec(props) {
  return (
    <div>
      <section className="HeadphoneSection">
        <div className="HeadImageOne">
          <img
            className="desktop"
            src={
              require("../../../assets/category-speakers/desktop/image-zx9.jpg")
                .default
            }
            alt="speaker section"
          ></img>
          <img
            className="tablet"
            src={
              require("../../../assets/category-speakers/tablet/image-zx9.jpg")
                .default
            }
            alt="speaker section"
          ></img>
          <img
            className="mobile"
            src={
              require("../../../assets/category-speakers/mobile/image-zx9.jpg")
                .default
            }
            alt="speaker section"
          ></img>
        </div>
        <div className="SectionText sectionOne">
          <p className="newProductSec">NEW PRODUCT</p>
          <h2 className="SectionMainTitle">ZX9 speaker</h2>
          <p className="sectionPara">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <Link to="/zx9" className="sectionButton">
            SEE PRODUCT
          </Link>
        </div>
      </section>
      <section className="HeadphoneSection">
        <div className="SectionText sectionTwo">
          <h2 className="SectionMainTitle">ZX7 speaker</h2>
          <p className="sectionPara ">
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
          </p>
          <Link to="/zx7" className="sectionButton">
            SEE PRODUCT
          </Link>
        </div>
        <div className="HeadImageOne">
          <img
            className="desktop"
            src={
              require("../../../assets/category-speakers/desktop/image-zx7.jpg")
                .default
            }
            alt="speaker section"
          ></img>
          <img
            className="tablet"
            src={
              require("../../../assets/category-speakers/tablet/image-zx7.jpg")
                .default
            }
            alt="speaker section"
          ></img>
          <img
            className="mobile"
            src={
              require("../../../assets/category-speakers/mobile/image-zx7.jpg")
                .default
            }
            alt="speaker section"
          ></img>
        </div>
      </section>
    </div>
  );
}

export default SpeakerSec;
