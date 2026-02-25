import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CartItem from '../components/CartItem'
import '../styles/App.css'

const Cart = ({ user, cart, setCart }) => {
  const navigate = useNavigate()

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0)

  const removeFromCart = (cartId) => {
    const newCart = cart.filter(item => item.cartId !== cartId)
    setCart(newCart)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      <Navbar user={user} cart={cart} showBack={true} showCart={false} />
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px' }}>
        <h1 style={{ 
          textAlign: 'center', 
          margin: '50px 0 40px 0', 
          color: 'var(--dark-brown)',
          fontSize: '3rem',
          fontWeight: '300'
        }}>
          Your Shopping Cart
        </h1>
        
        {cart.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '100px 20px',
            background: 'white',
            borderRadius: '20px',
            boxShadow: 'var(--shadow)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🛒</div>
            <p style={{ fontSize: '1.5rem', color: 'var(--secondary-brown)', marginBottom: '30px' }}>
              Your cart is empty
            </p>
            <button 
              onClick={() => navigate('/customer-home')}
              className="btn btn-primary"
              style={{ padding: '20px 40px', fontSize: '1.2rem' }}
            >
              Discover Products
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '50px' }}>
            {/* Cart Items */}
            <div>
              {cart.map((item) => (
                <CartItem 
                  key={item.cartId} 
                  item={item} 
                  onRemove={removeFromCart}
                />
              ))}
            </div>
            
            {/* Order Summary */}
            <div style={{ 
              background: 'white', 
              padding: '35px', 
              borderRadius: '16px',
              boxShadow: 'var(--shadow)',
              position: 'sticky',
              top: '120px',
              height: 'fit-content'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '25px', 
                color: 'var(--dark-brown)',
                borderBottom: '2px solid var(--light-brown)',
                paddingBottom: '15px'
              }}>
                Order Summary
              </h3>
              
              <div style={{ marginBottom: '25px' }}>
                {cart.map((item, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginBottom: '15px',
                    paddingBottom: '15px',
                    borderBottom: '1px solid var(--light-brown)'
                  }}>
                    <span style={{ flex: 1 }}>{item.name}</span>
                    <span style={{ fontWeight: 'bold' }}>${item.price}</span>
                  </div>
                ))}
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                fontSize: '1.4rem', 
                fontWeight: 'bold',
                paddingTop: '20px',
                borderTop: '2px solid var(--light-brown)'
              }}>
                <span>Total:</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              
              <button 
                onClick={() => navigate('/checkout')}
                className="btn btn-primary"
                style={{ 
                  width: '100%', 
                  padding: '20px', 
                  fontSize: '1.2rem',
                  marginTop: '30px'
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart