import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/App.css'

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    navigate('/login')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--dark-brown) 0%, var(--primary-brown) 50%, var(--light-brown) 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
        padding: '60px 50px',
        maxWidth: '500px',
        width: '100%',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '-40px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(135deg, var(--primary-brown), var(--dark-brown))',
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          color: 'white',
          boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
        }}>
          🎨
        </div>

        <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px' }}>
          <h1 style={{
            color: 'var(--dark-brown)',
            fontSize: '2.8rem',
            fontWeight: '300',
            marginBottom: '10px'
          }}>
            Create Account
          </h1>
          <p style={{
            color: 'var(--secondary-brown)',
            fontSize: '1.2rem',
            margin: 0
          }}>
            Join our tribal crafts community
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
            <div className="form-group">
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: 'var(--dark-brown)',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  border: '2px solid var(--light-brown)',
                  borderRadius: '10px',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  background: 'var(--cream)',
                  color: 'var(--input-text)'
                }}
                required
              />
            </div>

            <div className="form-group">
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: 'var(--dark-brown)',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  border: '2px solid var(--light-brown)',
                  borderRadius: '10px',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  background: 'var(--cream)',
                  color: 'var(--input-text)'
                }}
                required
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: 'var(--dark-brown)',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              style={{
                width: '100%',
                padding: '15px 20px',
                border: '2px solid var(--light-brown)',
                borderRadius: '10px',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                background: 'var(--cream)',
                color: 'var(--input-text)'
              }}
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
            <div className="form-group">
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: 'var(--dark-brown)',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  border: '2px solid var(--light-brown)',
                  borderRadius: '10px',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  background: 'var(--cream)',
                  color: 'var(--input-text)'
                }}
                required
              />
            </div>

            <div className="form-group">
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: 'var(--dark-brown)',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  border: '2px solid var(--light-brown)',
                  borderRadius: '10px',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  background: 'var(--cream)',
                  color: 'var(--input-text)'
                }}
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ 
              width: '100%',
              padding: '18px',
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '10px'
            }}
          >
            Create Account
          </button>
        </form>

        <div style={{
          textAlign: 'center',
          marginTop: '30px',
          paddingTop: '20px',
          borderTop: '2px solid var(--light-brown)'
        }}>
          <p style={{
            color: 'var(--secondary-brown)',
            fontSize: '1.1rem',
            margin: 0
          }}>
            Already have an account?{' '}
            <Link 
              to="/" 
              style={{ 
                color: 'var(--primary-brown)',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.color = 'var(--dark-brown)';
                e.target.style.textDecoration = 'underline';
              }}
              onMouseOut={(e) => {
                e.target.style.color = 'var(--primary-brown)';
                e.target.style.textDecoration = 'none';
              }}
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup