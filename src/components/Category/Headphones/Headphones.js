import React from "react";
import ProductWithImage from "../shared/ProductWithImage";
import { HeadphoneCont } from "./Headphonestyling";

//image imports

import xx99desktop from "../../../assets/category-headphones/desktop/marktwo.jpg";
import xx59desktop from "../../../assets/category-headphones/desktop/markthree.jpg";
import xxmark1desktop from "../../../assets/category-headphones/desktop/markone.jpg";

// tablet
import xx99tablet from "../../../assets/category-headphones/tablet/image-xx99-mark-two.jpg";
import xx59tablet from "../../../assets/category-headphones/tablet/image-xx59.jpg";
import xxmark1tablet from "../../../assets/category-headphones/tablet/image-xx99-mark-one.jpg";

//mobile
import xx99mobile from "../../../assets/category-headphones/mobile/image-xx99-mark-two.jpg";
import xx59mobile from "../../../assets/category-headphones/mobile/image-xx59.jpg";
import xxmark1mobile from "../../../assets/category-headphones/mobile/image-xx99-mark-one.jpg";

const Headphones = () => {
  // use inner width to determine image soure
  let markone = xxmark1desktop;
  let xx59 =  xx59desktop;
  let marktwo =  xx99desktop;

 
 

  if (window.innerWidth < 802) {
    markone = xx99tablet;
    xx59 = xx59tablet;
    marktwo = xxmark1tablet;
  } else if (window.innerWidth < 490) {
    markone = xx99mobile;
    xx59 = xx59mobile;
    marktwo = xxmark1mobile;
  }

  return (
    <HeadphoneCont data-testid="headphone">
      <ProductWithImage
        link="/xx99-mark-two"
        img={marktwo}
        label="SEE PRODUCT"
        np={"NEW PRODUCT"}
        title="XX99 Mark II Headphones"
        subtitle={
          "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        }
      />
      <ProductWithImage
        primary
        link="/xx99-mark-one"
        img={markone}
        label="SEE PRODUCT"
        title="XX99 Mark I Headphones"
        subtitle={
          "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        }
      />
      <ProductWithImage
        link="/xx59"
        img={xx59}
        label="SEE PRODUCT"
        title="XX59 Headphones"
        subtitle={
          " Enjoy your audio almost anywhere and customize it to your specifictastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        }
      />
    </HeadphoneCont>
  );
};

export default Headphones;
