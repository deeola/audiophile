import React, { useContext } from "react";
import audioContext from "../../../context/Audiophile/audioContext";
import CartControl from "./CartControl";
import {
  DesktopItemImage,
  ItemName,
  ItemNamePrice,
  ItemPrice,
  MobileItemImage,
  TabletItemImage,
  ImagePriceName,
  Images,
  ItemImageCartControl,
  ImagePriceInnerControl,
} from "./cartsharedstyling";

const CarItemImage = () => {
  const AudioContext = useContext(audioContext);
  const { cartItems, onAdd, onRemove } = AudioContext;

  return (
    <>
      {cartItems.map((item) => (
        <ImagePriceName key={item.id}>

          
            <ImagePriceInnerControl>
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
              <ItemName>{item.cartname}</ItemName>
              {cartItems.length !== 0 && (
                <ItemPrice>€{item.price}</ItemPrice>
              )}
            </ItemNamePrice>
          </ImagePriceInnerControl>
          
          
          <ItemImageCartControl>
            <CartControl
              itemqty={item.qty}
              onAdd={() => onAdd(item)}
              onRemove={() => onRemove(item)}
            />


          </ItemImageCartControl>
        </ImagePriceName>
      ))}
    </>
  );
};

export default CarItemImage;

