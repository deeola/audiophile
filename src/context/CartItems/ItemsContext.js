import React,{createContext, useState} from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = props => {

    const [newdata, setNewData] = useState([]);

    const getdata = async () => {
        const res = await fetch("./data.json");
    
        const items = await res.json();

        setNewData(items);
    };





    return(
        <ItemsContext.Provider value={
            getdata,
            [newdata, setNewData]
        }>
            {props.children}
        </ItemsContext.Provider>
    )
}



