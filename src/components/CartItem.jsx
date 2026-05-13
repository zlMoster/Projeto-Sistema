import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function CartItem({ item, index }) {
  const { removeFromCart } = useContext(CartContext)

  return (
    <div className="cart-item">
      <span>
        {item.name} - R$ {item.price}
      </span>

      <button onClick={() => removeFromCart(index)}>
        Remover
      </button>
    </div>
  )
}

export default CartItem