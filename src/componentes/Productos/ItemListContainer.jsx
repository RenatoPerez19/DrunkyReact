import Cards from "./Cards";

function ItemListContainer(props) {
    return (
        <div>
            <h1>{props.greeting}</h1>
            <div className="card-flex">
            <Cards title="Producto1"price={7400}/>
            <Cards title="Producto 2" price={5400}/>
            <Cards title="Producto 3" price={1400}/>
            </div>
        </div>
    )
}

export default ItemListContainer