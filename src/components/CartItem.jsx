import React from 'react'

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <img 
        src={item.image} 
        alt={item.name}
        className="cart-item-image"
      />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p style={{ color: 'var(--secondary-brown)', marginBottom: '10px' }}>
          By {item.artisan}
        </p>
        <p className="product-price">${item.price}</p>
      </div>
      <button 
        onClick={() => onRemove(item.id)}
        className="btn btn-danger"
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem