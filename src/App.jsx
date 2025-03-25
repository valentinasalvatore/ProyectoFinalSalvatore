import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar/NavBar';
import Contenedor from "./contenedor/contenedor"; 
import "./contenedor/contenedor.css";
import 'bootstrap/dist/css/bootstrap.min.css';





const App = () => {

  return (
    <>
      <NavBar />
        <section>
       <Contenedor mensaje="¡Bienvenido! Explora nuestros productos." />
        </section>
    </>

    
)
}

export default App