import "./NavBar.css";
import CartWdiget from "./Cartwidget";

function NavBar() {
  return (
    <div>
      <nav className="NavBar">
        <h1 className="nombre">Tienda Online</h1>
        <div className="menu">
          <a href="">Nosotros</a>
          <a href="">Servicios</a>
          <a href="">Contacto</a>
          <CartWdiget/>
        </div>
       
      </nav>
      <CartWdiget/>
    </div>
  );
}

export default NavBar;
