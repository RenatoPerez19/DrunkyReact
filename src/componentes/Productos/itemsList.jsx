import React from 'react'
import Cards from './Cards'

function itemsList(props) {
    return (
        <div>
            {
                    props.data.map((item)=>{
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
    )
}

export default itemsList