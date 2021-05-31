import React,{useContext} from 'react';
import audioContext from '../../context/Audiophile/audioContext'


function LayoutCheck(props) {
const AudioContext = useContext(audioContext);
  const successDisplay = AudioContext.successDisplay;
    return (
        <div className='layer'  style={successDisplay}>
            
        </div>
    )
}


export default LayoutCheck

