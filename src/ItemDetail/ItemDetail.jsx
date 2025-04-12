import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, nombre, precio, img, stock}) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)


    const manejadorCantidad= (cantidad) => {
      setAgregarCantidad(cantidad)
      console.log("Productos agregados:" + cantidad)
    }


  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid reprehenderit ducimus consequuntur magni id ratione quas quod nobis, ad, assumenda sequi corrupti, doloremque perferendis placeat quidem eum. Distinctio, harum at.</p>
        {
        
          agregarCantidad > 0 ?( <Link to="/cart"> Terminar Compra</Link> ) : ( <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/> )
        }

    </div>
  )
}

export default ItemDetail