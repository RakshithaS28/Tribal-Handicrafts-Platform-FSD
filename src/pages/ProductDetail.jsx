import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/App.css'

const ProductDetail = ({ user, cart, setCart, products }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column'
      }}>
        <h2>Product not found</h2>
        <button onClick={() => navigate('/customer-home')} className="btn btn-primary">
          Return to Home
        </button>
      </div>
    )
  }

  const addToCart = () => {
    setCart([...cart, { ...product, cartId: Date.now() }])
    alert('Product added to cart!')
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      <Navbar user={user} cart={cart} showBack={true} showCart={true} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          {/* Product Image */}
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              style={{ 
                width: '100%', 
                borderRadius: '20px', 
                boxShadow: 'var(--shadow-lg)',
                transition: 'transform 0.3s ease'
              }}
            />
          </div>
          
          {/* Product Info */}
          <div style={{ padding: '40px', background: 'white', borderRadius: '20px', boxShadow: 'var(--shadow)' }}>
            <h1 style={{ 
              color: 'var(--dark-brown)', 
              fontSize: '2.5rem', 
              marginBottom: '20px',
              fontWeight: '300'
            }}>
              {product.name}
            </h1>
            
            <p style={{ 
              color: 'var(--secondary-brown)', 
              fontSize: '1.3rem',
              marginBottom: '20px'
            }}>
              Crafted by <strong>{product.artisan}</strong>
            </p>
            
            <div style={{
              background: 'var(--light-brown)',
              padding: '25px',
              borderRadius: '15px',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              <p style={{ 
                fontSize: '2.5rem', 
                color: 'var(--dark-brown)', 
                fontWeight: 'bold',
                margin: 0
              }}>
                ${product.price}
              </p>
            </div>
            
            <div style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8', 
              color: 'var(--text-dark)',
              marginBottom: '30px',
              padding: '25px',
              background: 'var(--cream)',
              borderRadius: '12px'
            }}>
              {product.description}
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, var(--cream), white)',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid var(--light-brown)',
              marginBottom: '30px'
            }}>
              <h4 style={{ marginBottom: '15px', color: 'var(--dark-brown)' }}>✨ Product Highlights</h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Handcrafted using traditional techniques</li>
                <li>Supports tribal communities directly</li>
                <li>Eco-friendly and sustainable materials</li>
                <li>Unique piece with cultural significance</li>
              </ul>
            </div>
            
            <button 
              onClick={addToCart}
              className="btn btn-primary"
              style={{ 
                padding: '20px 40px', 
                fontSize: '1.3rem',
                width: '100%'
              }}
            >
              🛒 Add to Cart - ${product.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail