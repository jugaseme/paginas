import { useState } from "react"
import "./Admin.css"
import { useEffect } from "react"

function Admin( {products, setProducts, deleteProduct}) {

  useEffect(() => {
  fetch("http://localhost:3001/products")
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.error("Error cargando productos:", err))
}, [])

  const formatCurrency = (value, currency = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(value)
}


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
  const totalProducts = products.length

const totalValue = products.reduce(
  (acc, product) => acc + Number(product.price || 0),
  0
)

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


const handleSubmit = async (e) => {
  e.preventDefault()

  if (!form.name.trim()) return

  if (editingId) {
    // ACTUALIZAR
    const updatedProducts = products.map((p) =>
      p.id === editingId ? { ...form, price: Number(form.price) }
  : p
    )

    setProducts(updatedProducts)
    setEditingId(null)
    await fetch(`http://localhost:3001/products/${id}`, {
  method: "DELETE"
})
  } else {
    // AGREGAR
    const newProduct = {
      ...form,
      id: Date.now(),
      price: Number(form.price)
    }

    await fetch("http://localhost:3001/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(form)
})

const res = await fetch("http://localhost:3001/products")
const data = await res.json()
setProducts(data)
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
  {totalProducts === 0 ? (
    <p>No hay productos disponibles.</p>
  ) : (
    <p>Total de productos: {totalProducts}</p>
  )}
  {totalValue > 0 && (
    <p>Valor total del inventario: ${totalValue.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })} USD</p>
  )}  

{products.map(product => (
  <div key={product.id}>
    <h3>{product.name}</h3>
    <p>Precio: {formatCurrency(product.price)} USD</p>
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
