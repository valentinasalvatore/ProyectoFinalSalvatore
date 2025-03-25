import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"


const NavBar = () => {
  return (
    <header>
      <h1>TACOFARA</h1>

        <nav>
          <ul>
            <li>Sandalias</li>
            <li>Botas</li>
            <li>Zapatillas</li>
          </ul>
        </nav>
      
        <CartWidget/>

    </header>
  )
}

export default NavBar