import React , {useState, useEffect} from 'react'
import {SingleGetItem}   from "../../services/mocKAPI"
import "./ItemDetail.css";
import "../ItemCount/ItemCount"

import {useParams , Link} from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';

function ItemDetailContainer() {

    let [data,setData] = useState({});

    const params = useParams();
    const id = params.id;

    useEffect(()=>{
        SingleGetItem(id).then((respuestaDatos)=>setData(respuestaDatos));

    },[id]);



    const[ estadoCart , setEstadoCart]= useState(false)

    function handleAddToCart(){
        setEstadoCart(true);
    }

        

    

    return (
    
        <div className='contenedor'>
            <div className='div'>
                <h1>{data.title}</h1>
                <h2>Detalles : {data.detail}</h2>
                <h4>Stock:{data.stock}</h4>
                <h4>Categoria:{data.categoria}</h4>
                <strong>${data.price}</strong>
                {estadoCart === false? <ItemCount stock={5} OnAddToCart={handleAddToCart}/> : <Link to="/cart"><button>finalizar compra</button></Link>}
            </div>
            <div >
                <img src="https://place-hold.it/300" alt="card-img"></img>
            </div>
        </div>
    
    )
}

export default ItemDetailContainer