import React , {useState, useEffect} from 'react'
import CardDetail from '../Productos/CardDetail'
import {SingleGetItem}   from "../../services/mocKAPI"

function ItemDetailContainer() {
    let [data,setData] = useState({});

    useEffect(()=>{
        SingleGetItem().then((respuestaDatos)=>setData(respuestaDatos));

    },[]);

    return (
    <div>
        <div>
            <h1>{data.title}</h1>
            <strong>{data.price}</strong>
        </div>
    </div>
    )
}

export default ItemDetailContainer