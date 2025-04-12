import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUnProducto } from '../asyncmock/asyncmock';

const ItemDetailContainer = () => {
  const { idItem } = useParams(); 
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    console.log("Cargando producto con ID:", idItem); 
    getUnProducto(parseInt(idItem)).then((res) => {
      console.log("Producto obtenido:", res); 
      setProducto(res);
    });
  }, [idItem]);
  if (!producto) {
    return <p>Cargando producto...</p>; 
  }

  return (
    <div>
      <h2>Nombre: {producto.nombre}</h2>
      <img src={producto.img} alt={producto.nombre} style={{ width: '200px' }} />
      <p>Precio: ${producto.precio}</p>
      <p>ID: {producto.id}</p>
    </div>
  );
};

export default ItemDetailContainer;
