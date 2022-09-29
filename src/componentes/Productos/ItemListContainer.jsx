import React,{useState, useEffect} from "react";
import Cards from "./Cards";

import itemsList from "./itemsList";

import { useParams} from "react-router-dom"
import getItems, {getItemByCategoria} from "../../services/mocKAPI"








function ItemListContainer(props) {
    let [data , setData]=useState([]);

    const{cat}= useParams();
    

    useEffect(()=>{
    if (cat=== undefined){
        getItems().then((respuestaDatos)=> setData(respuestaDatos));
    }
    else{
        getItemsByCategory(cat).then((respuestaDatos)=> setData(respuestaDatos));
    }
    } ,[cat]); 

    return (
        <div>
            <h1>{props.greeting}</h1>
            <div className="card-flex">
                {
                    data.map((item)=>{
                        return <Cards 
                        key={item.id}
                        id={item.id}
                        price={item.price}
                        title={item.title}
                        img={item.img}
                        detail={item.detail}
                        stock={item.stock}

                        
                        ></Cards>
                        
                    })
                }
            </div>
        </div>
    )
}

export default ItemListContainer