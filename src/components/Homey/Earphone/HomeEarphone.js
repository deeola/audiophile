import React from "react";
import DescriptionText from "../Z7speakers/DescriptionText";
import {
  ContDiv,
  HomeEarphoneContainer,
} from "./HomeEarphoneStyling";

const HomeEarphone = () => {

  return (
    <HomeEarphoneContainer data-testid='earphone'>
      <ContDiv img='left'>
      </ContDiv>
      <ContDiv>
        <DescriptionText title={"YX1 EARPHONES"} link="/yx1" />
      </ContDiv>
    </HomeEarphoneContainer>
  );
};

export default HomeEarphone;
