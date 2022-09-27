import "./card.css";
import Button from "../boton/Button";
import ItemCount from "../ItemCount/ItemCount";

function Cards(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src="https://place-hold.it/300" alt="card-img"></img>
            </div>
            <div className="card-detail">
                <h3>{props.title}</h3>
                <p>{props.detail}</p>
                <h4>${props.price}</h4>
            </div>
            <Button>
                Ver mas
            </Button>
            
            
        </div>
    
    
    )
}

export default Cards