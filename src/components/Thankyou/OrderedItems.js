import React, { useContext } from "react";
import audioContext from "../../context/Audiophile/audioContext";
import {
    GrandTotal,
  GrandTotalPrice,
  LeftOrdered,
  OrderedItemsContainer,
  OtherItems,
  RightOrdered,
} from "./Ordersuccessstyling";
import SummaryDetails from "../Checkouts/Summary/SummaryDetails";
import {
  DesktopItemImage,
  ImagePriceInnerControl,
  ImagePriceName,
  Images,
  ItemName,
  ItemNamePrice,
  ItemPrice,
  MobileItemImage,
  TabletItemImage,
} from "../Basket/shared/cartsharedstyling";
import { CartQty, ItemQuantity } from "../Checkouts/Summary/summarystyling";



const OrderedItems = () => {
  const AudioContext = useContext(audioContext);

  const { TotalPrice, cartItems } = AudioContext;

  return (
    <OrderedItemsContainer>
      <LeftOrdered>
        {cartItems.map((item) => (
          <div>
            {cartItems[0] === item && (
              <div>
                <ImagePriceName key={item.id}>
                  <ImagePriceInnerControl>
                    <Images>
                      <DesktopItemImage
                        src={
                          require("../../assets" + item.image.desktop)
                            .default
                        }
                        alt="itemimage"
                      />
                      <TabletItemImage
                        src={
                          require("../../assets" + item.image.tablet).default
                        }
                        alt="itemimage"
                      />
                      <MobileItemImage
                        src={
                          require("../../assets" + item.image.mobile).default
                        }
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
                    <CartQty>
                      x<span>{item.qty}</span>
                    </CartQty>
                  </ItemQuantity>
                </ImagePriceName>
              </div>
            )}
          </div>
        ))}

        {cartItems.length > 1 && <OtherItems> and {cartItems.length - 1} other items</OtherItems>}
      </LeftOrdered>
      <RightOrdered>
        <GrandTotal>GRAND TOTAL</GrandTotal>
        <GrandTotalPrice>€{TotalPrice}</GrandTotalPrice>
      </RightOrdered>
    </OrderedItemsContainer>
  );
};

export default OrderedItems;
