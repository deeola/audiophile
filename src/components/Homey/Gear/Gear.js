import React from "react";
import {
  GearContainer,
  Left,
  Right,
  Text,
  Title,
  Paragraph,
} from "./Gearstyling";

const Gear = () => {
  return (
    <GearContainer data-testid='gear'>
      <Left>
        <Text>
          <Title>
            Bringing you the <span>best</span> audio gear
          </Title>
          <Paragraph>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Paragraph>
        </Text>
      </Left>
      <Right />
    </GearContainer>
  );
};

export default Gear;
