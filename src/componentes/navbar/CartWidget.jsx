import React, {useContext} from "react"
import {    cartContext, CartContextProvider} from "../../context/cartContext"

function CartWidget (){
    const {cart}= useContext(cartContext)
    return(
        <div>
            <span></span>
            <span>{cart.length}</span>
        </div>
    )
}

export default CartWidget 