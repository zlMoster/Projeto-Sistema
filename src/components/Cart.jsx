import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'

function Cart() {
  const { cart } = useContext(CartContext)

  const total = cart.reduce((acc, item) => acc + item.price, 0)

  return (
    <div className="cart">
      <h2>Carrinho</h2>

      {cart.map((item, index) => (
        <CartItem key={index} item={item} index={index} />
      ))}

      <h3>Total: R$ {total}</h3>
    </div>
  )
}

export default Cart