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
                            <a href="#" className="anclas">Inicio</a>
                        </li>
                        <li >
                            <a href="#" className="anclas">New In</a>
                        </li>
                        <li >
                            <a href="#" className="anclas">contacto</a>
                        </li>
                        <div>
                            <i class="bi bi-cart-plus-fill carrito"></i>
                        </div>
                    </div>
                
                        
                </div>
            </nav>

        </header>
    );

}

export default Nav