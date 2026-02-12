import "./Home.css"

function Home({ products }) {
  return (
    <div className="home-container">
      <h2>Productos</h2>

      <div className="grid">
        {products.map(product => (
          <div key={product.id} className="card">
            <h3>{product.name}</h3>
            <p>${product.price.toLocaleString("es-CO")}</p>
            <span>{product.category}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
