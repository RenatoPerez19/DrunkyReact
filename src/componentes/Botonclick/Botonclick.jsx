import React , {useState} from "react"

function Botonclick(){
    const [clickCount, setClickCount]= useState(0)
    function handleClick(){

        setClickCount(clickCount+1)
        
    }

    return(
        <div>
            <button onClick={handleClick}>click me</button>
            <h3>me clickeaste {clickCount} veces</h3>
        </div>
    )
}

export default Botonclick