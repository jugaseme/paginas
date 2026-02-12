import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/NavBar"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Cart from "./pages/Cart"

function App() {
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
