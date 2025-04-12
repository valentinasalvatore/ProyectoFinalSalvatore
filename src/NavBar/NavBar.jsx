import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [busqueda, setBusqueda] = useState("");

  const manejarCambio = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <header>
      <h1>
        <img src="/tacofara.png" alt="TacoFara Logo" width="120" />
      </h1>

      <nav>
        <ul>
          <li>Sandalias</li>
          <li>Botas</li>
          <li>Zapatillas</li>
          <li>Registrarse</li>
          <li>Carrito</li>
        </ul>
      </nav>

      <input 
        type="text" 
        placeholder="Buscar productos..." 
        value={busqueda}
        onChange={manejarCambio}
        className="buscador"
      />
    </header>
  );
};

export default NavBar;
