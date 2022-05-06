import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import audioContext from "../../../context/Audiophile/audioContext";
import { Button } from "../../Buttons/Button";

function EarpodLike(props) {
  const AudioContexts = useContext(audioContext);

  let others;
  if (AudioContexts.data.length > 0) {
    others = AudioContexts.data[0].others;
  }

  useEffect(() => {
    AudioContexts.getdata();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="alsoLike">
      <h4>YOU MAY ALSO LIKE</h4>
      <div className="likeDiv">
        <div className="eachLike">
          <img
            className="desktop"
            src={
              require("../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <img
            className="tablet"
            src={
              require("../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <img
            className="mobile"
            src={
              require("../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <p className="likeName">
            {others !== undefined ? others[0].name : null}
          </p>
          <Button link={"/xx99-mark-one"} label={"SEE PRODUCT"} />
        </div>
        <div className="eachLike">
          <img
            className="desktop"
            src={
              require("../../../assets/shared/desktop/image-xx59-headphones.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <img
            className="tablet"
            src={
              require("../../../assets/shared/tablet/image-xx59-headphones.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <img
            className="mobile"
            src={
              require("../../../assets/shared/mobile/image-xx59-headphones.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <p className="likeName">
            {others !== undefined ? others[1].name : null}
          </p>
          <Button link={"/xx59"} label={"SEE PRODUCT"} />
        </div>
        <div className="eachLike">
          <img
            className="desktop"
            src={
              require("../../../assets/shared/desktop/image-zx9-speaker.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <img
            className="tablet"
            src={
              require("../../../assets/shared/tablet/image-zx9-speaker.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <img
            className="mobile"
            src={
              require("../../../assets/shared/mobile/image-zx9-speaker.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <p className="likeName">
            {others !== undefined ? others[2].name : null}
          </p>
          <Button link={"/zx9"} label={"SEE PRODUCT"} />
        </div>
      </div>
    </div>
  );
}

export default EarpodLike;
