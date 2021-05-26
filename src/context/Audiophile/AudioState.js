import React,{useReducer} from 'react';
import audioContext from './audioContext';
import audioReducer from './audioReducer';
import {
    get_Data,
    set_loading,
    set_cartItems
} from '../types';


const AudioState = props => {

    const initialState = {
        data:[],
        quantity:1,
        loading:false,
        // cartItems:[]
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

    //   const setCartItems = () => dispatch({type:set_cartItems})


    //ON ADD FUNCTION
    // const onAdd = (product) => {
    //     const exist = cartItems.find((x) => x.id === product.id);
    
    //     if (exist) {
    //       setCartItems(
    //         cartItems.map((x) =>
    //           x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
    //         )
    //       );
    //     } else{
    //       setCartItems([...cartItems, {...product, qty:1}])
    //     }


    //     dispatch({
    //         type:set_cartItems,
    //         payload : exist
    //     });
    //   };



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