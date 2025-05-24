import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CarritoContext } from '../context/CarritoContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0)
    const { agregarAlCarrito } = useContext(CarritoContext)

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        const item = { id, nombre, precio, stock } 
        console.log("Agregando al carrito:", item, cantidad)
        agregarAlCarrito(item, cantidad)

        Swal.fire({
            title: '¡Perfecto!',
            text: 'Ve al carrito al terminar tu compra!',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#d63384'
        })
    }

    const resetAgregarCantidad = () => {
        setAgregarCantidad(0)
    }

    return (
        <div className='contenedorItem'>
            <h2>{nombre}</h2>
            <h3>${precio}</h3>
            <img src={img} alt={nombre} />
            <p>{descripcion}</p>

            {agregarCantidad === 0 ? (
                <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
            ) : (
                <>
                    <p>Cantidad agregada: {agregarCantidad}</p>
                    <button onClick={resetAgregarCantidad}>Agregar más</button>
                    <Link to="/carrito">Ir al carrito</Link>
                </>
            )}
        </div>
    )
}

export default ItemDetail
