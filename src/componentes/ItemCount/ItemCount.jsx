import React, {useState} from 'react'
import "./ItemCount.css"


function ItemCount(props) {
    const[count , setCount]=useState(props.inicial)

    function handleAdd(){
        if(count === props.stock){
            alert("llego al maximo stock")

        }else{
            setCount(count+1)
        }
        props.stock = props.stock - count;
    }

    function handleSubstract(){
        if(count ==1){
            alert("no puede tener menos de un producto")
        }else{
            setCount(count-1)
        }
        
    }

    function OnAdd(){
    
    }


    return(

    <div className='FondoDiv'>
        <h1>Entrega de contador</h1>
        <button onClick={handleSubstract}>-</button>
        <button>{count}</button>
        <button onClick={handleAdd}>+</button>
        <button onClick={OnAdd}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount