import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

import './styles/app.css'

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <ProductList />
        <Cart />
      </main>
    </div>
  )
}

export default App