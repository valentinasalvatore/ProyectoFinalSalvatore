import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import Cart from './Cart/Cart'
import Navbar from '../Navbar/Navbar'
import { CarritoProvider } from './context/CarritoContext'
import Checkout from './Checkout/Checkout'

const ImagenInicio = () => {
  const location = useLocation()

  if (location.pathname !== '/') return null

  return (
    <div className="portada-container">
      <img src="/sneakers-puma.jpg" alt="Imagen de portada" className="portada-img" />
      <img src="/model1.jpg" alt="Imagen de portada" className="portada-img" />
      <img src="/model2.jpg" alt="Imagen de portada" className="portada-img" />
      <img src="/model6.jpeg" alt="Imagen de portada" className="portada-img" />
    </div>
  )
}

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Navbar />
        <ImagenInicio />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  )
}

export default App
