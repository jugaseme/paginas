import { useState } from "react"
import "./Admin.css"


function Admin({ products, setProducts, deleteProduct }) {
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  

  const handleAddProduct = () => {
    if (!name || !price || !category) return

    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
      category
    }

    setProducts(prev => [...prev, newProduct])

    setName("")
    setPrice("")
    setCategory("")
  }
  const handleImageChange = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()

  reader.onloadend = () => {
    setImage(reader.result)
  }

  reader.readAsDataURL(file)
}


  const handleSubmit = (e) => {
  e.preventDefault()

  const newProduct = {
    id: Date.now(),
    name,
    price: Number(price),
    category,
    image
  }

  setProducts(prev => [...prev, newProduct])

  setName("")
  setPrice("")
  setCategory("")
  setImage("")
}

  return (
    <div>
      <h2>Panel Admin</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        placeholder="Categoría"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

<input 
  type="file" 
  accept="image/*"
  onChange={handleImageChange}
/>

{image && (
  <div className="preview-container">
    <p>Vista previa:</p>
    <img 
      src={image} 
      alt="Preview" 
      className="preview-image"
    />
  </div>
)}

      <button onClick={handleSubmit}>
        Agregar Producto
      </button>



  <h1>Productos</h1>
{products.map(product => (
  <div key={product.id}>
    <h3>{product.name}</h3>
    <p>Precio: ${product.price}</p>
    <p>Categoría: {product.category}</p>
     {product.image && (
      <img src={product.image} alt={product.name} className="product-image" />
    )}
    <button onClick={() => deleteProduct(product.id)}>
      Eliminar
    </button>
    <button >Editar</button>
  </div>
))}
    </div>
  )
}

export default Admin
