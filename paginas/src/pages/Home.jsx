import "./Home.css"
import { useState } from "react"

function Home({ cart, setCart }) {

const [products, setProducts] = useState(() => {
  const stored = localStorage.getItem("products")
  return stored ? JSON.parse(stored) : []
})

const addToCart = (product) => {
  setCart(prev => [...prev, product])
}
  const deleteProduct = (id) => {
  setProducts(products.filter(product => product.id !== id))
}

  return (
    <div className="home-container">
      <h2>Productos</h2>

      <div className="grid">
        {products.map(product => (
          <div key={product.id} className="card">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
                  />
            <h3>{product.name}</h3>
            
            <p>
              ${product.price.toLocaleString("es-CO")}
            </p>
            <h4>{product.category}</h4>

            <button onClick={() => addToCart(product)}>
              Agregar al carrito
            </button>

          
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
