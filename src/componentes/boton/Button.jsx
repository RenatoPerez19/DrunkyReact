
import React, {useState} from "react";
import "./boton.css"

function Button({children}) {

    const [color, setColor]= useState("red")

    
    function handleclick(){
        alert("clickeado")
        setColor("green")
    }
    return (
        <div>
        <button  style={{backgroundColor: color }} onClick={handleclick} className="btn">{children}</button>
        </div>
    )
}

export default Button