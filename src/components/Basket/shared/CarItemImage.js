import React, { useContext } from "react";
import audioContext from "../../../context/Audiophile/audioContext";
import {
  DesktopItemImage,
  ItemName,
  ItemNamePrice,
  ItemPrice,
  MobileItemImage,
  TabletItemImage,
  ImagePriceName,
  Images,
} from "./cartsharedstyling";

const CarItemImage = () => {
  const AudioContext = useContext(audioContext);
  const { cartItems } = AudioContext;

  return (
    <>
      {cartItems.map((item) => (
        <ImagePriceName key={item.id}>
          <Images>
            <DesktopItemImage
              src={require("../../../assets" + item.image.desktop).default}
              alt="itemimage"
            />
            <TabletItemImage
              src={require("../../../assets" + item.image.tablet).default}
              alt="itemimage"
            />
            <MobileItemImage
              src={require("../../../assets" + item.image.mobile).default}
              alt="itemimage"
            />
          </Images>
          <ItemNamePrice>
            <ItemName>{item.name}</ItemName>
            {cartItems.length !== 0 && (
              <ItemPrice>€{item.price.toFixed(2)}</ItemPrice>
            )}
          </ItemNamePrice>
        </ImagePriceName>
      ))}
    </>
  );
};

export default CarItemImage;
