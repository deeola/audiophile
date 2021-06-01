import React, { useContext, useEffect } from "react";

import audioContext from "../../../context/Audiophile/audioContext";

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
    <div>
      <h4>YOU MAY ALSO LIKE</h4>
      <div style={{ display: "flex", margin: "auto", width: "80%" }}>
        <div
          style={{
            width: "30%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            src={
              require("../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <img
            style={{ display: "none" }}
            src={
              require("../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <img
            style={{ display: "none" }}
            src={
              require("../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <p>{others !== undefined ? others[0].name : null}</p>
          <button>SEE PRODUCT</button>
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            src={
              require("../../../assets/shared/desktop/image-xx59-headphones.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <img
            style={{ display: "none" }}
            src={
              require("../../../assets/shared/tablet/image-xx59-headphones.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <img
            style={{ display: "none" }}
            src={
              require("../../../assets/shared/mobile/image-xx59-headphones.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <p>{others !== undefined ? others[1].name : null}</p>
          <button>SEE PRODUCT</button>
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            src={
              require("../../../assets/shared/desktop/image-zx9-speaker.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <img
            style={{ display: "none" }}
            src={
              require("../../../assets/shared/tablet/image-zx9-speaker.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <img
            style={{ display: "none" }}
            src={
              require("../../../assets/shared/mobile/image-zx9-speaker.jpg")
                .default
            }
            alt="firstimagedesktop"
          ></img>
          <p>{others !== undefined ? others[2].name : null}</p>
          <button>SEE PRODUCT</button>
        </div>
      </div>
    </div>
  );
}

export default EarpodLike;
