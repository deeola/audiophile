import React,{useContext} from 'react';
import audioContext from '../../../context/Audiophile/audioContext';
import { DesktopItemImage, ImagePriceInnerControl, ImagePriceName, Images, ItemName, ItemNamePrice, ItemPrice, MobileItemImage, TabletItemImage } from '../../Basket/shared/cartsharedstyling';
import { CartQty, ItemQuantity } from './summarystyling';


const SummaryDetails = () => {
    const AudioContext = useContext(audioContext);
  const { cartItems, } = AudioContext;
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
        <ItemQuantity>
          <CartQty>x<span>{item.qty}</span></CartQty>
        </ItemQuantity>
      </ImagePriceName>
    ))}
  </>
  )
}

export default SummaryDetails



