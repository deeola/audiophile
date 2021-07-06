import React, { useEffect, useContext } from "react";
import audioContext from "../../../../context/Audiophile/audioContext";
import { Link } from "react-router-dom";

function HeadphoneThreeLikes(props) {
  const AudioContexts = useContext(audioContext);

  let others;

  if (AudioContexts.data.length > 0) {
    others = AudioContexts.data[1].others;
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
              require("../../../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg")
                .default
            }
            alt="imagedesktop"
          ></img>
          <img
            className="tablet"
            src={
              require("../../../../assets/shared/tablet/tabheadphones.jpg")
                .default
            }
            alt="imagedesktop"
          ></img>
          <img
            className="mobile"
            src={
              require("../../../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg")
                .default
            }
            alt="imagedesktop"
          ></img>
          <p className="likeName">
            {others !== undefined ? others[0].name : null}
          </p>
          <Link className="likeLink" to="/xx99-mark-two">
            <button>SEE PRODUCT</button>
          </Link>
        </div>
        <div className="eachLike">
          <img
            className="desktop"
            src={
              require("../../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg")
                .default
            }
            alt="imagedesktop"
          ></img>
          <img
            className="tablet"
            src={
              require("../../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg")
                .default
            }
            alt="imagedesktop"
          ></img>
          <img
            className="mobile"
            src={
              require("../../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg")
                .default
            }
            alt="imagedesktop"
          ></img>
          <p className="likeName">
            {others !== undefined ? others[1].name : null}
          </p>
          <Link className="likeLink" to="/xx99-mark-one">
            <button>SEE PRODUCT</button>
          </Link>
        </div>
        <div className="eachLike">
          <img
            className="desktop"
            src={
              require("../../../../assets/shared/desktop/image-zx9-speaker.jpg")
                .default
            }
            alt="imagedesktop"
          ></img>
          <img
            className="tablet"
            src={
              require("../../../../assets/shared/tablet/image-zx9-speaker.jpg")
                .default
            }
            alt="imagedesktop"
          ></img>
          <img
            className="mobile"
            src={
              require("../../../../assets/shared/mobile/image-zx9-speaker.jpg")
                .default
            }
            alt="imagedesktop"
          ></img>
          <p className="likeName">
            {others !== undefined ? others[2].name : null}
          </p>
          <Link className="likeLink" to="/zx9">
            <button>SEE PRODUCT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeadphoneThreeLikes;
