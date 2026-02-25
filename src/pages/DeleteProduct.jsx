import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/App.css'

const DeleteProduct = ({ user, products, setProducts }) => {
  const navigate = useNavigate()

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = products.filter(product => product.id !== productId)
      setProducts(updatedProducts)
      alert('Product deleted successfully!')
    }
  }

  const userProducts = products.filter(product => product.artisan === user?.username)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      <Navbar user={user} cart={[]} showBack={true} showCart={false} showHome={false} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '50px', 
          color: 'var(--dark-brown)',
          fontSize: '2.5rem',
          fontWeight: '300'
        }}>
          Manage Your Products
        </h1>

        {userProducts.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '80px 20px',
            background: 'white',
            borderRadius: '20px',
            boxShadow: 'var(--shadow)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📦</div>
            <h3 style={{ color: 'var(--secondary-brown)', marginBottom: '20px' }}>No products found</h3>
            <p style={{ color: 'var(--secondary-brown)', marginBottom: '30px' }}>
              You haven't added any products yet.
            </p>
            <button 
              onClick={() => navigate('/add-product')}
              className="btn btn-primary"
              style={{ padding: '15px 30px' }}
            >
              Add Your First Product
            </button>
          </div>
        ) : (
          <div className="product-grid">
            {userProducts.map(product => (
              <div key={product.id} className="product-card">
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
                      onClick={() => handleDelete(product.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default DeleteProduct