import React from "react";
import { Button } from "../../Buttons/Button";

function Section(props) {
  return (
    <div>
      <section className="HeadphoneSection">
        <div className="HeadImageOne">
          <img
            className="desktop"
            src={
              require("../../../assets/category-headphones/desktop/marktwo.jpg")
                .default
            }
            alt="secondimage"
          ></img>
          <img
            className="tablet"
            src={
              require("../../../assets/category-headphones/tablet/image-xx99-mark-two.jpg")
                .default
            }
            alt="secondimage"
          ></img>
          <img
            className="mobile"
            src={
              require("../../../assets/category-headphones/mobile/image-xx99-mark-two.jpg")
                .default
            }
            alt="secondimage"
          ></img>
        </div>
        <div className="SectionText sectionOne">
          <p className="newProductSec">NEW PRODUCT</p>
          <h2 className="SectionMainTitle">XX99 Mark II Headphones</h2>
          <p className="sectionPara">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>

          <Button link={"/xx99-mark-two"} label={"SEE PRODUCT"} />
        </div>
      </section>
      <section className="HeadphoneSection">
        <div className="SectionText sectionTwo">
          <h2 className="SectionMainTitle">XX99 Mark I Headphones</h2>
          <p className="sectionPara ">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>

          <Button link={"/xx99-mark-one"} label={"SEE PRODUCT"} />
        </div>
        <div className="HeadImageOne">
          <img
            className="desktop"
            src={
              require("../../../assets/category-headphones/desktop/markone.jpg")
                .default
            }
            alt="firstimage"
          ></img>
          <img
            className="tablet"
            src={
              require("../../../assets/category-headphones/tablet/image-xx99-mark-one.jpg")
                .default
            }
            alt="secondimage"
          ></img>
          <img
            className="mobile"
            src={
              require("../../../assets/category-headphones/mobile/image-xx99-mark-one.jpg")
                .default
            }
            alt="secondimage"
          ></img>
        </div>
      </section>
      <section className="HeadphoneSection">
        <div className="HeadImageOne">
          <img
            className="desktop"
            src={
              require("../../../assets/category-headphones/desktop/markthree.jpg")
                .default
            }
            alt="thirdimage"
          ></img>
          <img
            className="tablet"
            src={
              require("../../../assets/category-headphones/tablet/image-xx59.jpg")
                .default
            }
            alt="secondimage"
          ></img>
          <img
            className="mobile"
            src={
              require("../../../assets/category-headphones/mobile/image-xx59.jpg")
                .default
            }
            alt="secondimage"
          ></img>
        </div>
        <div className="SectionText sectionOne">
          <h2 className="SectionMainTitle">XX59 Headphones</h2>
          <p className="sectionPara">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <Button link={"/xx59"} label={"SEE PRODUCT"} />
        </div>
      </section>
    </div>
  );
}

export default Section;
