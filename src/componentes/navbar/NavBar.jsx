import { Link } from "react-router-dom";
import "./navbar.css"



function Nav(){

    return(
        <header className="flex fondoNav NavFlex">
            <nav className="flex">
                <div className="fondoNav">
                    <div className="anclas NavFlex">
                        <div>
                            <h3 className="anclas NavFlex">Drunky</h3>
                        </div>
                        <li >
                            <Link to="/" className="anclas">Inicio</Link>
                        </li>
                        <li >
                            <Link to="/categoria/zapatillas" className="anclas">New In</Link>
                        </li>
                        <li >
                            <Link to="/categoria/buzos" className="anclas">buzos</Link>
                        </li>
                        <div>
                            <i className="bi bi-cart-plus-fill carrito"></i>
                        </div>
                    </div>
                
                        
                </div>
            </nav>

        </header>
    );

}

export default Nav