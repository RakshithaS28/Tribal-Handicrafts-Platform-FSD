import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/App.css'

const AddProduct = ({ user, setProducts, products }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: 'Pottery & Clay',
    image: ''
  })

  const categories = [
    'Pottery & Clay',
    'Weaving & Basketry', 
    'Wood Carving',
    'Textiles & Weaving',
    'Jewelry & Accessories',
    'Musical Instruments',
    'Metal Craft',
    'Art & Decor'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProduct = {
      id: Date.now(),
      ...formData,
      price: parseFloat(formData.price),
      artisan: user?.username || 'Tribal Artisan',
      rating: 0,
      reviews: 0
    }
    
    setProducts([...products, newProduct])
    alert('Product added successfully!')
    navigate('/artisan-dashboard')
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      <Navbar user={user} cart={[]} showBack={true} showCart={false} showHome={false} />
      
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
        <div style={{ 
          background: 'white', 
          padding: '50px', 
          borderRadius: '20px',
          boxShadow: 'var(--shadow)'
        }}>
          <h1 style={{ 
            textAlign: 'center', 
            marginBottom: '40px', 
            color: 'var(--dark-brown)',
            fontSize: '2.5rem',
            fontWeight: '300'
          }}>
            Add New Tribal Craft
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Product Image URL</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>

            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Traditional Tribal Pottery"
                required
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Price ($)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Describe your tribal craft, materials used, traditional techniques, cultural significance..."
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              🎨 Add Tribal Craft
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct