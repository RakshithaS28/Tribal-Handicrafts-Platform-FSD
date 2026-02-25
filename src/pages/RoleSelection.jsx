import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/App.css'

const RoleSelection = ({ setUser }) => {
  const navigate = useNavigate()

  const handleRoleSelect = (role) => {
    setUser(prev => ({ ...prev, role }))
    if (role === 'customer') {
      navigate('/customer-home')
    } else if (role === 'artisan') {
      navigate('/artisan-dashboard')
    } else if (role === 'admin') {
      navigate('/admin-dashboard')
    } else if (role === 'consultant') {
      navigate('/consultant-dashboard')
    }
  }

  return (
    <div className="desktop-login-container">
      <div className="desktop-login-card">
        <div className="desktop-tribal-icon">👥</div>
        
        <h1 className="desktop-login-title">Choose Your Role</h1>
        <p className="desktop-login-subtitle">Select how you want to experience tribal crafts</p>

        <div style={{ display: 'grid', gap: '20px', marginTop: '40px' }}>
          <button 
            onClick={() => handleRoleSelect('customer')}
            className="btn btn-primary"
            style={{ padding: '20px', fontSize: '1.2rem' }}
          >
            🛍️ Customer - Shop Handicrafts
          </button>
          
          <button 
            onClick={() => handleRoleSelect('artisan')}
            className="btn btn-secondary"
            style={{ padding: '20px', fontSize: '1.2rem' }}
          >
            🎨 Artisan - Sell Your Crafts
          </button>
          
          <button 
            onClick={() => handleRoleSelect('admin')}
            className="btn btn-secondary"
            style={{ padding: '20px', fontSize: '1.2rem' }}
          >
            ⚙️ Admin - Manage Platform
          </button>
          
          <button 
            onClick={() => handleRoleSelect('consultant')}
            className="btn btn-secondary"
            style={{ padding: '20px', fontSize: '1.2rem' }}
          >
            📚 Cultural Consultant - Verify Content
          </button>
        </div>
      </div>
    </div>
  )
}

export default RoleSelection