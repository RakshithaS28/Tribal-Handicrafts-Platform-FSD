import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/App.css'

const ConsultantDashboard = ({ user }) => {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('verification')

  const dashboardSections = {
    verification: {
      title: "Content Verification",
      content: (
        <div>
          <h4>Pending Cultural Verification</h4>
          <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
            {[
              { 
                product: 'Traditional Warli Painting', 
                artisan: 'Warli Artists Collective',
                description: 'Ancient tribal art form depicting daily life and nature',
                issues: 'Needs cultural context verification'
              },
              { 
                product: 'Bamboo Craft Set', 
                artisan: 'Northeast Weavers',
                description: 'Handcrafted bamboo products using traditional techniques',
                issues: 'Verify traditional methods used'
              },
              { 
                product: 'Tribal Jewelry Set', 
                artisan: 'Bhil Artisans',
                description: 'Authentic tribal jewelry with natural materials',
                issues: 'Confirm material authenticity'
              }
            ].map((item, index) => (
              <div key={index} style={{ 
                padding: '20px', 
                background: 'white', 
                border: '2px solid var(--light-brown)',
                borderRadius: '10px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                  <div>
                    <h5 style={{ margin: '0 0 5px 0', color: 'var(--dark-brown)' }}>{item.product}</h5>
                    <p style={{ margin: 0, color: 'var(--secondary-brown)' }}>By {item.artisan}</p>
                  </div>
                  <span style={{ 
                    padding: '5px 10px', 
                    background: '#FF9800',
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    Pending Review
                  </span>
                </div>
                <p style={{ marginBottom: '15px' }}>{item.description}</p>
                <div style={{ 
                  padding: '10px', 
                  background: '#FFF3E0', 
                  borderRadius: '5px',
                  marginBottom: '15px'
                }}>
                  <strong>Cultural Notes:</strong> {item.issues}
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button className="btn btn-primary">Approve</button>
                  <button className="btn btn-secondary">Request Changes</button>
                  <button className="btn btn-danger">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    heritage: {
      title: "Heritage Validation",
      content: (
        <div>
          <h4>Traditional Technique Validation</h4>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid var(--light-brown)' }}>
            <h5>Validation Guidelines</h5>
            <div style={{ display: 'grid', gap: '15px', marginTop: '15px' }}>
              <div style={{ padding: '15px', background: 'var(--cream)', borderRadius: '5px' }}>
                <strong>✅ Traditional Pottery Techniques</strong>
                <ul style={{ margin: '10px 0 0 20px' }}>
                  <li>Hand-coiling method verification</li>
                  <li>Natural clay sourcing</li>
                  <li>Traditional firing techniques</li>
                  <li>Authentic tribal motifs</li>
                </ul>
              </div>
              <div style={{ padding: '15px', background: 'var(--cream)', borderRadius: '5px' }}>
                <strong>✅ Weaving & Textile Traditions</strong>
                <ul style={{ margin: '10px 0 0 20px' }}>
                  <li>Handloom verification</li>
                  <li>Natural dye sources</li>
                  <li>Traditional patterns</li>
                  <li>Regional specificity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    research: {
      title: "Cultural Research",
      content: (
        <div>
          <h4>Research Database</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid var(--light-brown)' }}>
              <h5>📚 Tribal Craft Documentation</h5>
              <div style={{ marginTop: '15px' }}>
                <div style={{ padding: '10px', background: 'var(--cream)', borderRadius: '5px', marginBottom: '10px' }}>
                  <strong>Warli Art</strong>
                  <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>Documented: 85% complete</p>
                </div>
                <div style={{ padding: '10px', background: 'var(--cream)', borderRadius: '5px', marginBottom: '10px' }}>
                  <strong>Madhubani Painting</strong>
                  <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>Documented: 92% complete</p>
                </div>
                <div style={{ padding: '10px', background: 'var(--cream)', borderRadius: '5px' }}>
                  <strong>Bamboo Craft</strong>
                  <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>Documented: 78% complete</p>
                </div>
              </div>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid var(--light-brown)' }}>
              <h5>🌍 Community Outreach</h5>
              <div style={{ marginTop: '15px' }}>
                <div style={{ padding: '15px', background: 'var(--cream)', borderRadius: '5px' }}>
                  <strong>Active Tribal Communities</strong>
                  <p style={{ margin: '10px 0' }}>12 communities engaged</p>
                  <button className="btn btn-primary" style={{ width: '100%' }}>View Community Map</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    guidelines: {
      title: "Content Guidelines",
      content: (
        <div>
          <h4>Cultural Content Standards</h4>
          <div style={{ background: 'white', padding: '25px', borderRadius: '10px', border: '1px solid var(--light-brown)' }}>
            <h5>📋 Guidelines for Product Listings</h5>
            <div style={{ marginTop: '20px', display: 'grid', gap: '15px' }}>
              <div style={{ padding: '15px', background: '#E8F5E8', borderRadius: '5px' }}>
                <strong>✅ Required Information</strong>
                <ul style={{ margin: '10px 0 0 20px' }}>
                  <li>Specific tribal origin</li>
                  <li>Traditional techniques used</li>
                  <li>Material authenticity</li>
                  <li>Cultural significance</li>
                </ul>
              </div>
              <div style={{ padding: '15px', background: '#FFEBEE', borderRadius: '5px' }}>
                <strong>❌ Prohibited Content</strong>
                <ul style={{ margin: '10px 0 0 20px' }}>
                  <li>Cultural appropriation</li>
                  <li>Misrepresentation of origins</li>
                  <li>Machine-made items as handmade</li>
                  <li>Unauthorized cultural symbols</li>
                </ul>
              </div>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '20px' }}>Update Guidelines</button>
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
          📚 Cultural Consultant Dashboard
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '30px' }}>
          {/* Sidebar Navigation */}
          <div style={{ background: 'white', padding: '25px', borderRadius: '15px', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ marginBottom: '20px', color: 'var(--dark-brown)' }}>Cultural Tools</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {Object.keys(dashboardSections).map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`btn ${activeSection === section ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ textAlign: 'left', justifyContent: 'flex-start' }}
                >
                  {section === 'verification' && '✅ Content Verification'}
                  {section === 'heritage' && '🏺 Heritage Validation'}
                  {section === 'research' && '🌍 Cultural Research'}
                  {section === 'guidelines' && '📝 Content Guidelines'}
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

        {/* Quick Access Cards */}
        <div className="dashboard-grid" style={{ marginTop: '40px' }}>
          <div 
            className="dashboard-card"
            onClick={() => setActiveSection('verification')}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✅</div>
            <h3>Content Verification</h3>
            <p>Verify cultural accuracy of product descriptions</p>
            <div style={{ marginTop: '15px', padding: '10px', background: 'var(--cream)', borderRadius: '5px' }}>
              <strong>3 Pending Reviews</strong>
            </div>
          </div>

          <div 
            className="dashboard-card"
            onClick={() => setActiveSection('heritage')}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏺</div>
            <h3>Heritage Validation</h3>
            <p>Ensure traditional techniques are properly represented</p>
            <div style={{ marginTop: '15px', padding: '10px', background: 'var(--cream)', borderRadius: '5px' }}>
              <strong>12 Techniques Documented</strong>
            </div>
          </div>

          <div 
            className="dashboard-card"
            onClick={() => setActiveSection('research')}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🌍</div>
            <h3>Cultural Research</h3>
            <p>Research and document tribal craft traditions</p>
            <div style={{ marginTop: '15px', padding: '10px', background: 'var(--cream)', borderRadius: '5px' }}>
              <strong>8 Research Projects</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsultantDashboard