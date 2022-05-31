import React, { FC, useContext } from "react";
import audioContext from "../../../context/Audiophile/audioContext";
import { RemoveAllContainer } from "./cartsharedstyling";

interface iProps{

}

const RemoveAll:FC<iProps> = () => {
  const AudioContext = useContext(audioContext);
  const { removeAll } = AudioContext;

  return (
    <RemoveAllContainer onClick={() => removeAll()}>Remove All</RemoveAllContainer>
  );
};

export default RemoveAll;

