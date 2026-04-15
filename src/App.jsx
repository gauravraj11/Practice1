import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <p className="category">{product.category}</p>
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
      </div>
      <div className="product-actions">
        <button className="btn-cart">🛒 Add to Cart</button>
        <button className="btn-buy">⚡ Buy Now</button>
      </div>
    </div>
  )
}

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })

  }, [])

  return (
    <div className="app">
      <Navbar />

      <main className="main">
        <h1 className="page-title">Our Products</h1>
        <p className="page-subtitle">Discover our wide range of quality products</p>

        {loading ? (
          <p className="loading">Loading products...</p>
        ) : (
          <div className="product-grid">
            {products.map(i => (
              <ProductCard   product={i} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App