const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

let products = []

app.get("/products", (req, res) => {
  res.json(products)
})

app.post("/products", (req, res) => {
  const newProduct = {
    id: Date.now(),
    ...req.body
  }

  products.push(newProduct)
  res.status(201).json(newProduct)
})

app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id)

  products = products.map(p =>
    p.id === id ? { ...p, ...req.body } : p
  )

  res.json({ message: "Producto actualizado" })
})

app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id)

  products = products.filter(p => p.id !== id)

  res.json({ message: "Producto eliminado" })
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})