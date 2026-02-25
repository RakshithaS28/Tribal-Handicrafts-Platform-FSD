import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/App.css'

const AdminDashboard = ({ user }) => {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('overview')

  const dashboardSections = {
    overview: {
      title: "Platform Overview",
      content: (
        <div>
          <h3>Welcome, Administrator! ⚙️</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '30px' }}>
            <div style={{ background: 'var(--light-brown)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h4>Total Users</h4>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--dark-brown)' }}>1,247</p>
            </div>
            <div style={{ background: 'var(--light-brown)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h4>Total Products</h4>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--dark-brown)' }}>856</p>
            </div>
            <div style={{ background: 'var(--light-brown)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h4>Total Orders</h4>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--dark-brown)' }}>324</p>
            </div>
            <div style={{ background: 'var(--light-brown)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h4>Revenue</h4>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--dark-brown)' }}>$24,580</p>
            </div>
          </div>
        </div>
      )
    },
    users: {
      title: "User Management",
      content: (
        <div>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
            <input 
              type="text" 
              placeholder="Search users..." 
              style={{ flex: 1, padding: '10px', border: '1px solid var(--light-brown)', borderRadius: '5px' }}
            />
            <button className="btn btn-primary">Search</button>
          </div>
          <div style={{ background: 'white', border: '1px solid var(--light-brown)', borderRadius: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--cream)' }}>
                  <th style={{ padding: '12px', textAlign: 'left' }}>User</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Role</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Status</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'John Doe', email: 'john@example.com', role: 'Customer', status: 'Active' },
                  { name: 'Artisan Group', email: 'artisan@tribal.com', role: 'Artisan', status: 'Active' },
                  { name: 'Cultural Expert', email: 'expert@heritage.com', role: 'Consultant', status: 'Pending' }
                ].map((user, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid var(--light-brown)' }}>
                    <td style={{ padding: '12px' }}>
                      <div>
                        <strong>{user.name}</strong>
                        <div style={{ color: 'var(--secondary-brown)', fontSize: '0.9rem' }}>{user.email}</div>
                      </div>
                    </td>
                    <td style={{ padding: '12px' }}>{user.role}</td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        borderRadius: '12px',
                        background: user.status === 'Active' ? '#4CAF50' : '#FF9800',
                        color: 'white',
                        fontSize: '0.8rem'
                      }}>
                        {user.status}
                      </span>
                    </td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <button className="btn btn-secondary" style={{ padding: '5px 10px', fontSize: '0.8rem' }}>Edit</button>
                        <button className="btn btn-danger" style={{ padding: '5px 10px', fontSize: '0.8rem' }}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    products: {
      title: "Product Moderation",
      content: (
        <div>
          <h4>Pending Product Approvals</h4>
          <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
            {[
              { name: 'Traditional Mask', artisan: 'Tribal Artists', price: '$65.00', status: 'Pending Review' },
              { name: 'Handwoven Rug', artisan: 'Weavers Collective', price: '$120.00', status: 'Pending Review' },
              { name: 'Clay Pottery Set', artisan: 'Pottery Masters', price: '$89.99', status: 'Approved' }
            ].map((product, index) => (
              <div key={index} style={{ 
                padding: '15px', 
                background: 'white', 
                border: '2px solid var(--light-brown)',
                borderRadius: '8px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong>{product.name}</strong>
                    <p style={{ margin: '5px 0', color: 'var(--secondary-brown)' }}>
                      By {product.artisan} | {product.price}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ 
                      padding: '5px 10px', 
                      borderRadius: '15px',
                      background: product.status === 'Approved' ? '#4CAF50' : '#FF9800',
                      color: 'white',
                      fontSize: '0.8rem'
                    }}>
                      {product.status}
                    </span>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <button className="btn btn-primary" style={{ padding: '5px 10px' }}>Approve</button>
                      <button className="btn btn-danger" style={{ padding: '5px 10px' }}>Reject</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    analytics: {
      title: "Platform Analytics",
      content: (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid var(--light-brown)' }}>
              <h5>User Growth</h5>
              <div style={{ height: '150px', background: 'var(--cream)', borderRadius: '5px', display: 'flex', alignItems: 'end', padding: '10px', gap: '5px' }}>
                {[30, 45, 60, 75, 90, 100].map((height, index) => (
                  <div key={index} style={{ 
                    height: `${height}%`, 
                    background: 'var(--primary-brown)', 
                    flex: 1,
                    borderRadius: '2px'
                  }}></div>
                ))}
              </div>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid var(--light-brown)' }}>
              <h5>Platform Statistics</h5>
              <div style={{ display: 'grid', gap: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Daily Active Users</span>
                  <strong>247</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Monthly Revenue</span>
                  <strong>$8,450</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Conversion Rate</span>
                  <strong>3.2%</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Avg. Order Value</span>
                  <strong>$75.80</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      <Navbar user={user} cart={[]} showBack={false} showCart={false} showHome={false} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '50px', 
          color: 'var(--dark-brown)',
          fontSize: '2.5rem',
          fontWeight: '300'
        }}>
          ⚙️ Admin Dashboard
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '30px' }}>
          {/* Sidebar Navigation */}
          <div style={{ background: 'white', padding: '25px', borderRadius: '15px', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ marginBottom: '20px', color: 'var(--dark-brown)' }}>Admin Tools</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {Object.keys(dashboardSections).map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`btn ${activeSection === section ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ textAlign: 'left', justifyContent: 'flex-start' }}
                >
                  {section === 'overview' && '📊 Overview'}
                  {section === 'users' && '👥 Users'}
                  {section === 'products' && '📦 Products'}
                  {section === 'analytics' && '📈 Analytics'}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: 'var(--shadow)' }}>
            <h2 style={{ marginBottom: '20px', color: 'var(--dark-brown)' }}>
              {dashboardSections[activeSection].title}
            </h2>
            {dashboardSections[activeSection].content}
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="dashboard-grid" style={{ marginTop: '40px' }}>
          <div 
            className="dashboard-card"
            onClick={() => setActiveSection('users')}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👥</div>
            <h3>User Management</h3>
            <p>Manage customers, artisans, and platform users</p>
            <div style={{ marginTop: '15px', padding: '10px', background: 'var(--cream)', borderRadius: '5px' }}>
              <strong>1,247 Total Users</strong>
            </div>
          </div>

          <div 
            className="dashboard-card"
            onClick={() => setActiveSection('products')}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📦</div>
            <h3>Product Moderation</h3>
            <p>Review and approve new product listings</p>
            <div style={{ marginTop: '15px', padding: '10px', background: 'var(--cream)', borderRadius: '5px' }}>
              <strong>12 Pending Reviews</strong>
            </div>
          </div>

          <div 
            className="dashboard-card"
            onClick={() => setActiveSection('analytics')}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💰</div>
            <h3>Revenue Tracking</h3>
            <p>Monitor all platform transactions</p>
            <div style={{ marginTop: '15px', padding: '10px', background: 'var(--cream)', borderRadius: '5px' }}>
              <strong>$24,580 Revenue</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard