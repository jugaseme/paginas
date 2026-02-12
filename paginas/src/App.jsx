import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/NavBar"

import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Cart from "./pages/Cart"

function App() {

  const [products, setProducts] = useState([])

  return (
    <BrowserRouter>
      <Navbar cartCount={Cart.length} />

      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/admin" element={<Admin products={products} setProducts={setProducts} />}  />
        <Route path="/cart" element={<Cart products={products} />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
