import React from "react";
import LikeComponent from "./LikeComponent";
import { Likes, Header, GeneralLikeCont } from "./ProductLikestyling";

const ProductLike = ({
  img1,
  img2,
  img3,
  link1,
  link2,
  link3,
  title1,
  title2,
  title3,
}) => {
  return (
    <GeneralLikeCont>
      <Header>YOU MAY ALSO LIKE</Header>
      <Likes>
        <LikeComponent
          title={title1}
          label="SEE PRODUCT"
          image={img1}
          link={link1}
        />
        <LikeComponent
          title={title2}
          label="SEE PRODUCT"
          image={img2}
          link={link2}
        />
        <LikeComponent
          title={title3}
          label="SEE PRODUCT"
          image={img3}
          link={link3}
        />
      </Likes>
    </GeneralLikeCont>
  );
};

export default ProductLike;


