import React, { useContext, useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { db } from '../service/config';
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import './Checkout.css'; 

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

  const manejadorFormulario = async (evento) => {
    evento.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completá todos los campos requeridos.");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los emails no coinciden. Revisalos nuevamente.");
      return;
    }

    const orden = {
      items: carrito.map(producto => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
        precioUnitario: producto.item.precio
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email
    };

    try {
      for (const productoOrden of orden.items) {
        const productoRef = doc(db, "productos", productoOrden.id);
        const productoDoc = await getDoc(productoRef);

        if (!productoDoc.exists()) {
          setError(`El producto ${productoOrden.nombre} no existe.`);
          return;
        }

        const stockActual = productoDoc.data().stock;

        if (stockActual < productoOrden.cantidad) {
          setError(`No hay stock suficiente para ${productoOrden.nombre}.`);
          return;
        }
      }

      await Promise.all(
        orden.items.map(async productoOrden => {
          const productoRef = doc(db, "productos", productoOrden.id);
          const productoDoc = await getDoc(productoRef);
          const stockActual = productoDoc.data().stock;

          await updateDoc(productoRef, {
            stock: stockActual - productoOrden.cantidad
          });
        })
      );

      const docRef = await addDoc(collection(db, "ordenes"), orden);
      setOrdenId(docRef.id);
      vaciarCarrito();
      setError("");
    } catch (err) {
      console.log(err);
      setError("Ocurrió un error al procesar la compra.");
    }
  };

  return (
    <div className="checkout-contenedor">
      <h2>Finalizar Compra</h2>

      <form onSubmit={manejadorFormulario} className="checkout-form">
        <div className="checkout-resumen">
          <h3>Resumen del pedido</h3>
          {carrito.map(producto => (
            <div key={producto.item.id} className="checkout-item">
              <p>{producto.item.nombre} x {producto.cantidad}</p>
              <p>${producto.item.precio}</p>
            </div>
          ))}
          <h4>Total: ${total}</h4>
        </div>

        <div className="checkout-campo">
          <label>Nombre:</label>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className="checkout-campo">
          <label>Apellido:</label>
          <input type="text" onChange={(e) => setApellido(e.target.value)} />
        </div>

        <div className="checkout-campo">
          <label>Teléfono:</label>
          <input type="text" onChange={(e) => setTelefono(e.target.value)} />
        </div>

        <div className="checkout-campo">
          <label>Email:</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="checkout-campo">
          <label>Confirmar Email:</label>
          <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
        </div>

        {error && <p className="checkout-error">{error}</p>}

        <button type="submit" className="checkout-boton">Confirmar Compra</button>

        {ordenId && (
          <p className="checkout-exito">
            ¡Gracias por tu compra! Tu número de orden es: <strong>{ordenId}</strong>
          </p>
        )}
      </form>
    </div>
  );
};

export default Checkout;
