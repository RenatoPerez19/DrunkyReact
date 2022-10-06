import React , { useState, createContext}from "react";


const cartContext = createContext();

export default function CartContextProvider({children}){
    
    const [cart , setCart]= useState([])

    function addItem(item , count){
        let newCart = cart.map(item=>item)

        newCart.push({...item, count: count})
        setCart(newCart);

    }


    return(
        <cartContext.Provider value={{cart , addItem}}>

            {children}

        </cartContext.Provider>
    )

}

export {cartContext }