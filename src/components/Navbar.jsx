import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NotificationBell from './NotificationBell'

const Navbar = ({ user, cart, showBack = false, showCart = true, showHome = true }) => {
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="btn btn-secondary"
          >
            ← Back
          </button>
        )}
        <Link to="/customer-home" className="nav-brand">
          🎪 Tribal Crafts
        </Link>
      </div>
      
      <div className="nav-links">
        {showHome && (
          <Link to="/customer-home" className="nav-link">
            🏠 Home
          </Link>
        )}
        
        {/* Notification Bell */}
        <NotificationBell />
        
        {showCart && (
          <Link to="/cart" className="nav-link">
            🛒 Cart ({cart?.length || 0})
          </Link>
        )}
        
        {user && (
          <span className="nav-link" style={{ background: 'rgba(255,255,255,0.2)' }}>
            👋 {user.username}
          </span>
        )}
        
        <button 
          onClick={() => navigate('/login')}
          className="btn btn-secondary"
        >
          🚪 Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar