import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom"; 
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  const [busqueda, setBusqueda] = useState("");

  const manejarCambio = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <header>
      <h1>
        <img src="/tacofara.png" alt="TacoFara Logo" width="100" />
      </h1>

      <nav>
        <ul>
          <li><Link to="/categoria/sandalias">Sandalias</Link></li>
          <li><Link to="/categoria/botas">Botas</Link></li>
          <li><Link to="/categoria/zapatillas">Zapatillas</Link></li>
          <li><Link to="/carrito">Carrito</Link></li>
        </ul>
      </nav>

      <CartWidget/>
    </header>
  );
};

export default NavBar;
