import { useState } from "react"

function Admin({ products, setProducts }) {
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

      <button onClick={handleAddProduct}>
        Agregar Producto
      </button>
    </div>
  )
}

export default Admin
