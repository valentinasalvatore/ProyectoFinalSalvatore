 import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../service/config'
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { idCategoria } = useParams()

  useEffect(() => {
    if (!idCategoria) {
      setProductos([])
      setLoading(false)
      return
    }

    const productosRef = query(collection(db, 'productos'), where('categoria', '==', idCategoria))

    getDocs(productosRef)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setProductos(nuevosProductos)
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [idCategoria])

  return (
    <div>
      {loading ? <Loader /> : <ItemList productos={productos} />}
    </div>
  )
}

export default ItemListContainer
