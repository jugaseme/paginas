function Cart({ cart, setCart }) {

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  )

  return (
    <div style={{ padding: "40px" }}>
      <h2>Carrito</h2>

      {cart.length === 0 && <p>El carrito está vacío.</p>}

      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price.toLocaleString("es-CO")}
          <button onClick={() => removeFromCart(index)}>
            Eliminar
          </button>
        </div>
      ))}

      <h3>Total: ${total.toLocaleString("es-CO")}</h3>
    </div>
  )
}

export default Cart
