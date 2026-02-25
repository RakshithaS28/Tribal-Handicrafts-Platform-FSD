import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/App.css'

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, var(--dark-brown), var(--primary-brown))',
        color: 'white',
        padding: '100px 50px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '20px', fontWeight: '300' }}>
          🎪 Tribal Crafts Marketplace
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '40px', opacity: 0.9 }}>
          Preserving Heritage, Empowering Artisans
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button onClick={() => navigate('/login')} className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '15px 30px' }}>
            Login
          </button>
          <button onClick={() => navigate('/signup')} className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '15px 30px' }}>
            Sign Up
          </button>
        </div>
      </div>

      {/* Mission Section */}
      <div style={{ padding: '80px 50px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--dark-brown)', marginBottom: '50px' }}>
          Our Mission
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '15px', boxShadow: 'var(--shadow)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎨</div>
            <h3 style={{ color: 'var(--dark-brown)', marginBottom: '15px' }}>Preserve Heritage</h3>
            <p>Support the preservation of traditional tribal crafts and techniques passed down through generations.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '15px', boxShadow: 'var(--shadow)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🤝</div>
            <h3 style={{ color: 'var(--dark-brown)', marginBottom: '15px' }}>Empower Artisans</h3>
            <p>Provide tribal artisans with a global platform to showcase and sell their authentic handicrafts.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '15px', boxShadow: 'var(--shadow)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🌍</div>
            <h3 style={{ color: 'var(--dark-brown)', marginBottom: '15px' }}>Connect Cultures</h3>
            <p>Bridge the gap between tribal communities and global customers who appreciate authentic craftsmanship.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, var(--primary-brown), var(--dark-brown))',
        color: 'white',
        padding: '60px 50px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Contact Information</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
          <div>
            <h4>📧 Email</h4>
            <p>support@tribalcrafts.com</p>
          </div>
          <div>
            <h4>📞 Phone</h4>
            <p>+1 (555) 123-4567</p>
          </div>
          <div>
            <h4>🏢 Address</h4>
            <p>123 Craft Street, Heritage City</p>
          </div>
          <div>
            <h4>🕒 Hours</h4>
            <p>Mon-Fri: 9AM-6PM</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ 
        background: 'var(--dark-brown)',
        color: 'white',
        textAlign: 'center',
        padding: '40px 20px'
      }}>
        <p>&copy; 2024 Tribal Crafts Marketplace. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Landing