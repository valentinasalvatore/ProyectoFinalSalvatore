import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import Contenedor from "./contenedor/contenedor"; 
import "./contenedor/contenedor.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer/ItemListContainer.jsx'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Zapatillas from './Zapatillas/Zapatillas'
import Botas from './Botas/Botas'
import Sandalias from './Sandalias/Sandalias'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        <Route path='/zapatillas' element={<Zapatillas />} />
        <Route path='/botas' element={<Botas />} />
        <Route path='/sandalias' element={<Sandalias />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;