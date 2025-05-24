import { useState, createContext } from "react";

export const CarritoContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
  agregarAlCarrito: () => {},
  eliminarProducto: () => {},
  vaciarCarrito: () => {},
});

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  const agregarAlCarrito = (item, cantidad) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find(
        (prod) => prod.item.id === item.id
      );

      if (!productoExistente) {
        if (cantidad <= item.stock) {
          const nuevoCarrito = [...prevCarrito, { item, cantidad }];
          setCantidadTotal((prev) => prev + cantidad);
          setTotal((prev) => prev + item.precio * cantidad);
          return nuevoCarrito;
        } else {
          alert(`Solo hay ${item.stock} unidades disponibles.`);
          return prevCarrito;
        }
      } else {
        const nuevaCantidad = productoExistente.cantidad + cantidad;
        if (nuevaCantidad <= item.stock) {
          const carritoActualizado = prevCarrito.map((prod) =>
            prod.item.id === item.id
              ? { ...prod, cantidad: nuevaCantidad }
              : prod
          );
          setCantidadTotal((prev) => prev + cantidad);
          setTotal((prev) => prev + item.precio * cantidad);
          return carritoActualizado;
        } else {
          alert(`No puedes agregar más de ${item.stock} unidades de este producto.`);
          return prevCarrito;
        }
      }
    });
  };

  const eliminarProducto = (id) => {
    const productoEliminado = carrito.find((prod) => prod.item.id === id);
    if (!productoEliminado) return;

    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id);
    setCarrito(carritoActualizado);
    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setTotal((prev) => prev - productoEliminado.item.precio * productoEliminado.cantidad);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setCantidadTotal(0);
    setTotal(0);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        total,
        cantidadTotal,
        agregarAlCarrito,
        eliminarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
