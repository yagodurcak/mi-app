import "./navBar.css";

function NavBar() {

    return(
        <div>            
            <nav className= "NavBar">
                <h1 className="nombre">Tienda Online</h1>
                <div className="menu">
                    <a href="">Nosotros</a>
                    <a href="">Servicios</a>
                    <a href="">Contacto</a>
                </div>
             
                </nav>
        </div>

        
    )
    
    
}

export default NavBar;