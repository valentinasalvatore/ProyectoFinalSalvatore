import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

let cantidad = 3000
let colorFondo = {backgroundColor: "pink"}
  return (
    <>
      <h1 style={colorFondo}>HOLA CHICOS, BIENVENIDOS </h1>
       <section>
        <p>Aca podes encontrar mas de {cantidad} utiles esenciales para tus clases!</p>
        </section>
    </>// podemos no utilizar div para ue no haya 4000 divs
    
)
}

export default App