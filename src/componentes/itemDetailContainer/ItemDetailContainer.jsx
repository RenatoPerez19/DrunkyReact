import React , {useState, useEffect} from 'react'
import CardDetail from '../Productos/CardDetail'
import {SingleGetItem}   from "../../services/mocKAPI"
import "./ItemDetail.css"

function ItemDetailContainer() {
    let [data,setData] = useState({});

    useEffect(()=>{
        SingleGetItem().then((respuestaDatos)=>setData(respuestaDatos));

    },[]);

    return (
    
        <div className='contenedor'>
            <div className='div'>
                <h1>{data.title}</h1>
                <h2>Detalles : {data.detail}</h2>
                <h4>Stock:{data.stock}</h4>
                <h4>Categoria:{data.categoria}</h4>
                <strong>${data.price}</strong>
            </div>
            <div >
                <img src="https://place-hold.it/300" alt="card-img"></img>
            </div>
        </div>
    
    )
}

export default ItemDetailContainer