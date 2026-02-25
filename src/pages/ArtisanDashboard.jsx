import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/App.css'

const ArtisanDashboard = ({ user }) => {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('overview')

  const dashboardSections = {
    overview: {
      title: "Dashboard Overview",
      content: (
        <div>
          <h3>Welcome, {user?.username || 'Artisan'}! 🎨</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}>
            <div style={{ background: 'var(--light-brown)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h4>Total Products</h4>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--dark-brown)' }}>12</p>
            </div>
            <div style={{ background: 'var(--light-brown)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h4>Total Sales</h4>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--dark-brown)' }}>$1,240</p>
            </div>
            <div style={{ background: 'var(--light-brown)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <h4>Pending Orders</h4>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--dark-brown)' }}>3</p>
            </div>
          </div>
        </div>
      )
    },
    products: {
      title: "Product Management",
      content: (
        <div>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
            <button onClick={() => navigate('/add-product')} className="btn btn-primary">
              ➕ Add New Product
            </button>
            <button onClick={() => navigate('/delete-product')} className="btn btn-secondary">
              🗑️ Manage Products
            </button>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
            <h4>Your Products</h4>
            <div style={{ display: 'grid', gap: '15px', marginTop: '15px' }}>
              {[1, 2, 3].map(item => (
                <div key={item} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '15px',
                  background: 'var(--cream)',
                  borderRadius: '8px'
                }}>
                  <div>
                    <strong>Traditional Pottery #{item}</strong>
                    <p style={{ margin: 0, color: 'var(--secondary-brown)' }}>Price: $45.99 | Stock: 5</p>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn btn-secondary" style={{ padding: '5px 10px' }}>Edit</button>
                    <button className="btn btn-danger" style={{ padding: '5px 10px' }}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    orders: {
      title: "Order Management",
      content: (
        <div>
          <h4>Recent Orders</h4>
          <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
            {[
              { id: 'ORD-001', product: 'Bamboo Basket', customer: 'John Doe', status: 'Shipped' },
              { id: 'ORD-002', product: 'Wood Carving', customer: 'Jane Smith', status: 'Processing' },
              { id: 'ORD-003', product: 'Tribal Shawl', customer: 'Mike Johnson', status: 'Pending' }
            ].map(order => (
              <div key={order.id} style={{ 
                padding: '15px', 
                background: 'white', 
                borderRadius: '8px',
                border: '2px solid var(--light-brown)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong>{order.id}</strong> - {order.product}
                    <p style={{ margin: '5px 0', color: 'var(--secondary-brown)' }}>
                      Customer: {order.customer}
                    </p>
                  </div>
                  <div>
                    <span style={{ 
                      padding: '5px 10px', 
                      borderRadius: '15px',
                      background: order.status === 'Shipped' ? '#4CAF50' : 
                                 order.status === 'Processing' ? '#FF9800' : '#f44336',
                      color: 'white',
                      fontSize: '0.8rem'
                    }}>
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    analytics: {
      title: "Sales Analytics",
      content: (
        <div>
          <h4>Sales Performance</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
              <h5>Monthly Revenue</h5>
              <div style={{ height: '100px', background: 'var(--cream)', borderRadius: '5px', display: 'flex', alignItems: 'end', padding: '10px' }}>
                {[40, 60, 80, 70, 90, 100].map((height, index) => (
                  <div key={index} style={{ 
                    height: `${height}%`, 
                    background: 'var(--primary-brown)', 
                    flex: 1, 
                    margin: '0 2px',
                    borderRadius: '2px'
                  }}></div>
                ))}
              </div>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
              <h5>Top Products</h5>
              <div style={{ display: 'grid', gap: '10px' }}>
                {['Tribal Pottery', 'Bamboo Baskets', 'Wood Carvings'].map((product, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{product}</span>
                    <span style={{ fontWeight: 'bold' }}>{85 - index * 10} sales</span>
                  </div>
                ))}
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
          🎨 Artisan Dashboard
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px' }}>
          {/* Sidebar Navigation */}
          <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ marginBottom: '20px', color: 'var(--dark-brown)' }}>Navigation</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {Object.keys(dashboardSections).map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`btn ${activeSection === section ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ textAlign: 'left', justifyContent: 'flex-start' }}
                >
                  {section === 'overview' && '📊 Overview'}
                  {section === 'products' && '📦 Products'}
                  {section === 'orders' && '📋 Orders'}
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

        {/* Quick Stats Cards */}
        <div className="dashboard-grid" style={{ marginTop: '40px' }}>
          <div 
            className="dashboard-card"
            onClick={() => setActiveSection('products')}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📦</div>
            <h3>Product Management</h3>
            <p>Add, edit, or remove your tribal crafts</p>
            <div style={{ marginTop: '15px', padding: '10px', background: 'var(--cream)', borderRadius: '5px' }}>
              <strong>12 Active Products</strong>
            </div>
          </div>

          <div 
            className="dashboard-card"
            onClick={() => setActiveSection('orders')}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📋</div>
            <h3>Order Management</h3>
            <p>Process and track customer orders</p>
            <div style={{ marginTop: '15px', padding: '10px', background: 'var(--cream)', borderRadius: '5px' }}>
              <strong>3 Pending Orders</strong>
            </div>
          </div>

          <div 
            className="dashboard-card"
            onClick={() => setActiveSection('analytics')}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📈</div>
            <h3>Sales Analytics</h3>
            <p>View your sales performance and insights</p>
            <div style={{ marginTop: '15px', padding: '10px', background: 'var(--cream)', borderRadius: '5px' }}>
              <strong>$1,240 Revenue</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtisanDashboard