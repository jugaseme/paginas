import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/NavBar"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Cart from "./pages/Cart"

function App() {
  const [products, setProducts] = useState(() => {
  const stored = localStorage.getItem("products")
  return stored ? JSON.parse(stored) : [defaultProducts]
})

useEffect(() => {
  localStorage.setItem("products", JSON.stringify(products))
}, [products])


const deleteProduct = (id) => {
  const confirmDelete = window.confirm("¿Seguro que quieres eliminar este producto?")
  
  if (confirmDelete) {
    setProducts(prev =>
      prev.filter(product => product.id !== id)
    )
  }
}
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
      deleteProduct={deleteProduct}
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
