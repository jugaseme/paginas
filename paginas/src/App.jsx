import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/NavBar"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Cart from "./pages/Cart"

function App() {

  const defaultProducts = [
  {
    id: 1,
    name: "Camiseta Negra",
    price: 80000,
    category: "Ropa",
    image: "https://picsum.photos/400?random=1"
  },
  {
    id: 2,
    name: "Gorra Street",
    price: 50000,
    category: "Accesorios",
    image: "https://picsum.photos/400?random=2"
  },
  {
    id: 3,
    name: "Chaqueta Oversize",
    price: 150000,
    category: "Ropa",
    image: "https://picsum.photos/400?random=3"
  }
]

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      <Routes>
       <Route 
  path="/" 
  element={
    <Home 
      products={products}
      cart={cart}
      setCart={setCart}
    />
  } 
/>


        <Route 
          path="/admin" 
          element={
            <Admin 
              products={products} 
              setProducts={setProducts} 
            />
          } 
        />

        <Route 
          path="/cart" 
          element={
            <Cart 
              cart={cart}
              setCart={setCart}
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
