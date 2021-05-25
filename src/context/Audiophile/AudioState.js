import React,{useReducer} from 'react';
import audioContext from './audioContext';
import audioReducer from './audioReducer';
import {
    get_Data,
    set_loading
} from '../types';


const AudioState = props => {

    const initialState = {
        data:[],
        quantity:1,
        loading:false
    }

    const [state,dispatch] = useReducer(audioReducer, initialState)

    //Fetch data


    const getdata = async () => {
        setloading()
        const res = await fetch("./data.json");
    
        const items = await res.json();

    

        dispatch({
            type:get_Data,
            payload : items
        });
      };


      const setloading = () => dispatch({type:set_loading})
    return <audioContext.Provider
    value={{
        data : state.data,
        quantity : state.quantity,
        loading:state.loading,
        getdata
    }}
    >

        {props.children}
    </audioContext.Provider>

}

export default AudioState;