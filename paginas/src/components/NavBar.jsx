import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav style={{ padding: "20px", textAlign: "center" }}>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/admin">Admin</Link> |{" "}
      <Link to="/cart">Carrito</Link>
    </nav>
  )
}

export default Navbar
