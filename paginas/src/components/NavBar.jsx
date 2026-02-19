import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">
        🛍 MiTienda
      </div>

      <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/cart">
          Carrito ({cartCount})
        </Link>
      </div>
    </nav>
  )
}

export default NavBar

