import "./Home.css"

function Home({ products, cart, setCart }) {

  const addToCart = (product) => {
    setCart(prev => [...prev, product])
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

            <span>{product.category}</span>

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
