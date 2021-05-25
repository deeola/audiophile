import React, { useContext, useEffect } from "react";
import EarpodSingle from "./EarpodSingle";
import audioContext from "../../../context/Audiophile/audioContext";
import { v4 as uuidv4 } from 'uuid';
function EarpodLike(props) {
  const AudioContexts = useContext(audioContext);

  let others;

  if (AudioContexts.data.length > 0) {
    others = AudioContexts.data[0].others;
    console.log(others)
  }

  useEffect(() => {
    AudioContexts.getdata();
     // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h4>YOU MAY ALSO LIKE</h4>
      <div>
        {others !== undefined
          ? others.map((like) => <EarpodSingle key={uuidv4()} name={like.name} />)
          : null}
      </div>
    </div>
  );
}

export default EarpodLike;
