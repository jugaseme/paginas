import { useState } from "react"
import "./Admin.css"


function Admin( {products, setProducts, deleteProduct}) {

  const handleEdit = (product) => {
  setForm(product)
  setEditingId(product.id)
}

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: ""
  })

  const [editingId, setEditingId] = useState(null)
  

const handleImageChange = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()

  reader.onloadend = () => {
    setForm({...form, image: reader.result})
  }

  reader.readAsDataURL(file)
}


const handleSubmit = (e) => {
  e.preventDefault()

  if (!form.name.trim()) return

  if (editingId) {
    // ACTUALIZAR
    const updatedProducts = products.map((p) =>
      p.id === editingId ? form : p
    )

    setProducts(updatedProducts)
    setEditingId(null)
  } else {
    // AGREGAR
    const newProduct = {
      ...form,
      id: Date.now()
    }

    setProducts([...products, newProduct])
  }

  setForm({
    name: "",
    price: "",
    category: "",
    image: ""
  })
}

  return (
    <div>
      <h2>Panel Admin</h2>
<form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={form.name}
        onChange={(e) => setForm({...form, name: e.target.value})}
      />

      <input
        type="number"
        placeholder="Precio"
        value={form.price}
        onChange={(e) => setForm({...form, price: e.target.value})}
      />

      <input
        type="text"
        placeholder="Categoría"
        value={form.category}
        onChange={(e) => setForm({...form, category: e.target.value})}
      />

<input 
  type="file" 
  accept="image/*"
  onChange={handleImageChange}
/>

{form.image && (
  <div className="preview-container">
    <p>Vista previa:</p>
    <img 
      src={form.image} 
      alt="Preview" 
      className="preview-image"
    />
  </div>
)}


<button type="submit" >{editingId ? "Actualizar Producto" : "Agregar Producto"}</button>
</form>


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
    <button onClick={() => handleEdit(product)}>Editar</button>
  </div>
))}

    </div>
  )
}

export default Admin
