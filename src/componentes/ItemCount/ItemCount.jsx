import React, {useState} from 'react'
import "./ItemCount.css"
import "../Productos/Cards"
import "../itemDetailContainer/ItemDetailContainer"


function ItemCount({stock , OnAddToCart}) {
    const[count , setCount]=useState(1);

    function handleAdd(){
        if(count < stock)setCount(count+1)
    }

    function handleSubstract(){
        if(count > 1) setCount(count-1)
        
    }


    
    
        
    const[ estadoCart , setEstadoCart]= useState(false)
    
    function OnAddToCart(){
        alert(`agregaste al carrito!`)
        setEstadoCart(true);

    
    }


    return(

    <div >
        <button className='Botones' onClick={handleSubstract}>-</button>
        <span>{count}</span>
        <button className='Botones' onClick={handleAdd}>+</button>
        <div>
        <button className='Botones' onClick={()=>OnAddToCart(count)}>Agregar al carrito</button>
        </div>
    </div>
    )
}

export default ItemCount