import products from '../data/products'
import ProductCard from './ProductCard'

function ProductList() {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList