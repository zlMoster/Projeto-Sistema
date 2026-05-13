import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Header() {
  const { cart } = useContext(CartContext)

  return (
    <header className="header">
      <h1>Carrinho de Compras</h1>
      <p>Itens no carrinho: {cart.length}</p>
    </header>
  )
}

export default Header