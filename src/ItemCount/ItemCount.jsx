import React, { useState } from "react";


const ItemCount = ({ stock, inicial = 1, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="item-count-container">
      <div className="contador-buttons">
        <button 
          onClick={decrementar} 
          className="btn-count"
          disabled={contador <= 1}
        >
          -
        </button>
        <span className="contador-display">{contador}</span>
        <button 
          onClick={incrementar} 
          className="btn-count"
          disabled={contador >= stock}
        >
          +
        </button>
      </div>
      <button 
        className="btn-agregar" 
        onClick={() => funcionAgregar(contador)}
        disabled={stock === 0}
      >
        {stock === 0 ? "Sin stock" : "Agregar"}
      </button>
    </div>
  );
};

export default ItemCount;
