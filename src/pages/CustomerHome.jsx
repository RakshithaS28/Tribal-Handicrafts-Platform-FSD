import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import ChatWidget from '../components/ChatWidget'
import '../styles/App.css'

const CustomerHome = ({ user, cart, setCart, products }) => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'Pottery & Clay', 'Weaving & Basketry', 'Wood Carving', 'Textiles & Weaving', 'Jewelry & Accessories', 'Musical Instruments']

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.artisan.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      <Navbar user={user} cart={cart} showBack={false} showCart={true} />
      
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, var(--dark-brown), var(--primary-brown))',
        color: 'white',
        padding: '60px 40px',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: '300' }}>
          Discover Authentic Tribal Handicrafts
        </h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
          Support indigenous artisans and preserve cultural heritage through every purchase
        </p>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        {/* Search and Filter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', gap: '20px' }}>
          <input
            type="text"
            placeholder="🔍 Search products, artisans..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ 
              padding: '12px 20px',
              border: '2px solid var(--light-brown)',
              borderRadius: '25px',
              fontSize: '16px',
              background: 'white'
            }}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>

        {/* Products Grid */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--dark-brown)', fontWeight: '300' }}>
            {selectedCategory === 'all' ? 'All Tribal Crafts' : selectedCategory}
          </h2>
          <p style={{ color: 'var(--secondary-brown)', fontSize: '1.1rem' }}>
            {filteredProducts.length} {filteredProducts.length === 1 ? 'craft' : 'crafts'} found
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '80px 20px',
            background: 'white',
            borderRadius: '20px',
            boxShadow: 'var(--shadow)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔍</div>
            <h3 style={{ color: 'var(--secondary-brown)', marginBottom: '20px' }}>No crafts found</h3>
            <p style={{ color: 'var(--secondary-brown)' }}>Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <ChatWidget />
    </div>
  )
}

export default CustomerHome