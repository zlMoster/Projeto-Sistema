import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import "../styles/app.css"

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="listbackground">
      <div className="product-card">
        <h3>{product.name}</h3>
        <p>R$ {product.price}</p>

        <button onClick={() => addToCart(product)}>
          Adicionar
        </button>
      </div>
    </div>
  )
}

export default ProductCard