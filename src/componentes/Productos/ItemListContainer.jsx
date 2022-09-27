import React,{useState, useEffect} from "react";
import Cards from "./Cards";
import getItems from "../../services/mocKAPI"
import itemsList from "./itemsList";





function ItemListContainer(props) {
    let [data , setData]=useState([]);

    useEffect(()=>{
        getItems().then((respuestaDatos)=>{
            setData(respuestaDatos);
        })
    },
        []
    )


    return (
        <div>
            <h1>{props.greeting}</h1>
            <div className="card-flex">
                {
                    data.map((item)=>{
                        return <Cards 
                        key={item.id}
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