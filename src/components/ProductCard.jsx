import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="artisan-name">By {product.artisan}</p>
        <p style={{ color: 'var(--secondary-brown)', fontSize: '0.9rem', marginBottom: '15px' }}>
          {product.category}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="product-price">${product.price}</span>
          <button 
            onClick={() => navigate(`/product/${product.id}`)}
            className="btn btn-primary"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard