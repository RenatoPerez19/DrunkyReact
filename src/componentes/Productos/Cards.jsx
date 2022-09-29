import "./card.css";
import Button from "../boton/Button";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function Cards(props) {
    const urlDetalle=`/zapatillas/${props.id}`
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
            <Link to={urlDetalle}>
            <Button>
                Ver mas
            </Button>
            </Link>
            
            
        </div>
    
    
    )
}

export default Cards