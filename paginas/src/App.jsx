import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/NavBar"

import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Cart from "./pages/Cart"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
