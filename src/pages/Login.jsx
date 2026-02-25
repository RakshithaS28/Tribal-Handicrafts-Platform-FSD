import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/App.css'

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [captcha, setCaptcha] = useState('')
  const [userCaptcha, setUserCaptcha] = useState('')
  const navigate = useNavigate()

  // Generate CAPTCHA
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
    return result;
  }

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (userCaptcha !== captcha) {
      alert('CAPTCHA verification failed! Please try again.');
      generateCaptcha();
      setUserCaptcha('');
      return;
    }

    setUser({ username: formData.username })
    navigate('/role-selection')
  }

  return (
    <div className="desktop-login-container">
      <div className="desktop-login-card">
        <div className="desktop-tribal-icon">🎪</div>
        
        <h1 className="desktop-login-title">Welcome to Tribal Crafts</h1>
        <p className="desktop-login-subtitle">Sign in to explore authentic tribal handicrafts</p>

        <form onSubmit={handleSubmit} className="desktop-login-form">
          <div className="desktop-form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="desktop-form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* CAPTCHA Section */}
          <div className="captcha-container">
            <div className="captcha-text">{captcha}</div>
            <button 
              type="button" 
              onClick={generateCaptcha}
              className="btn btn-secondary"
              style={{ marginBottom: '15px' }}
            >
              🔄 Refresh CAPTCHA
            </button>
            <input
              type="text"
              placeholder="Enter CAPTCHA"
              value={userCaptcha}
              onChange={(e) => setUserCaptcha(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid var(--light-brown)',
                borderRadius: '8px',
                fontSize: '16px',
                textAlign: 'center',
                letterSpacing: '2px'
              }}
              required
            />
          </div>

          <button type="submit" className="desktop-login-button">
            Login
          </button>
        </form>

        <div className="desktop-signup-link">
          <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login