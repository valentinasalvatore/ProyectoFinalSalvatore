import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h4>{item.nombre}</h4>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: ${item.precio}</p>
      <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
