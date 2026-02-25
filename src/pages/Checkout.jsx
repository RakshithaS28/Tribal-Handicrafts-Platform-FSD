import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/App.css'

const Checkout = ({ user, cart, setCart }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    pincode: '',
    paymentMethod: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      setCart([])
      navigate('/customer-home')
    }, 3000)
  }

  if (showSuccess) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, var(--dark-brown), var(--primary-brown))'
      }}>
        <div style={{
          background: 'white',
          padding: '60px',
          borderRadius: '20px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
          textAlign: 'center',
          maxWidth: '500px',
          width: '90%'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎉</div>
          <h2 style={{ color: 'var(--primary-brown)', marginBottom: '20px' }}>
            Order Confirmed Successfully!
          </h2>
          <p style={{ color: 'var(--secondary-brown)', marginBottom: '30px' }}>
            Thank you for supporting tribal artisans! Your order will be shipped soon.
          </p>
          <div style={{ 
            background: 'var(--light-brown)', 
            padding: '20px', 
            borderRadius: '10px',
            marginBottom: '20px'
          }}>
            <p style={{ margin: '5px 0' }}><strong>Order Total:</strong> ${totalAmount.toFixed(2)}</p>
            <p style={{ margin: '5px 0' }}><strong>Shipping to:</strong> {formData.address}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      <Navbar user={user} cart={cart} showBack={true} showCart={false} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '50px', 
          color: 'var(--dark-brown)',
          fontSize: '2.5rem',
          fontWeight: '300'
        }}>
          Checkout
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px' }}>
          {/* Checkout Form */}
          <div style={{ 
            background: 'white', 
            padding: '40px', 
            borderRadius: '20px',
            boxShadow: 'var(--shadow)'
          }}>
            <h3 style={{ marginBottom: '30px', color: 'var(--dark-brown)' }}>Shipping Information</h3>
            
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '25px' }}>
                <label>Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '30px' }}>
                <label>Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>

              <h4 style={{ marginBottom: '20px', color: 'var(--dark-brown)' }}>Payment Method</h4>
              <div className="payment-methods">
                <div 
                  className={`payment-method ${formData.paymentMethod === 'credit-card' ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, paymentMethod: 'credit-card'})}
                >
                  💳 Credit Card
                </div>
                <div 
                  className={`payment-method ${formData.paymentMethod === 'paypal' ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, paymentMethod: 'paypal'})}
                >
                  📱 PayPal
                </div>
                <div 
                  className={`payment-method ${formData.paymentMethod === 'upi' ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, paymentMethod: 'upi'})}
                >
                  📲 UPI
                </div>
                <div 
                  className={`payment-method ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, paymentMethod: 'cod'})}
                >
                  💰 Cash on Delivery
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ 
                  width: '100%', 
                  padding: '20px', 
                  fontSize: '1.2rem',
                  marginTop: '20px'
                }}
                disabled={!formData.paymentMethod}
              >
                Place Order - ${totalAmount.toFixed(2)}
              </button>
            </form>
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
                  <span style={{ flex: 1, fontSize: '0.9rem' }}>{item.name}</span>
                  <span style={{ fontWeight: 'bold' }}>${item.price}</span>
                </div>
              ))}
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              fontSize: '1.3rem', 
              fontWeight: 'bold',
              paddingTop: '20px',
              borderTop: '2px solid var(--light-brown)'
            }}>
              <span>Total:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout