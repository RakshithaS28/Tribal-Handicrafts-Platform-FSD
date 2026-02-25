import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useNotifications } from '../contexts/NotificationContext'
import '../styles/App.css'

const Notifications = ({ user }) => {
  const navigate = useNavigate()
  const { notifications, markAsRead, markAllAsRead, deleteNotification, clearAllNotifications } = useNotifications()
  const [filter, setFilter] = useState('all')

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true
    if (filter === 'unread') return !notification.read
    return notification.type === filter
  })

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'order': return '🛒'
      case 'product': return '📦'
      case 'system': return '⚙️'
      case 'alert': return '⚠️'
      case 'success': return '✅'
      default: return '🔔'
    }
  }

  const getNotificationColor = (type) => {
    switch (type) {
      case 'order': return '#4CAF50'
      case 'product': return '#2196F3'
      case 'system': return '#9C27B0'
      case 'alert': return '#FF9800'
      case 'success': return '#4CAF50'
      default: return '#607D8B'
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      <Navbar user={user} cart={[]} showBack={true} showCart={false} />
      
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
        <div style={{ 
          background: 'white', 
          padding: '40px', 
          borderRadius: '20px',
          boxShadow: 'var(--shadow)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h1 style={{ color: 'var(--dark-brown)', margin: 0 }}>Notifications</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="btn btn-primary"
                onClick={markAllAsRead}
                disabled={notifications.filter(n => !n.read).length === 0}
              >
                Mark All as Read
              </button>
              <button 
                className="btn btn-danger"
                onClick={clearAllNotifications}
                disabled={notifications.length === 0}
              >
                Clear All
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
            <button
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({notifications.length})
            </button>
            <button
              className={`filter-tab ${filter === 'unread' ? 'active' : ''}`}
              onClick={() => setFilter('unread')}
            >
              Unread ({notifications.filter(n => !n.read).length})
            </button>
            <button
              className={`filter-tab ${filter === 'order' ? 'active' : ''}`}
              onClick={() => setFilter('order')}
            >
              Orders
            </button>
            <button
              className={`filter-tab ${filter === 'product' ? 'active' : ''}`}
              onClick={() => setFilter('product')}
            >
              Products
            </button>
            <button
              className={`filter-tab ${filter === 'system' ? 'active' : ''}`}
              onClick={() => setFilter('system')}
            >
              System
            </button>
          </div>

          {/* Notifications List */}
          <div className="notifications-page-list">
            {filteredNotifications.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔔</div>
                <h3 style={{ color: 'var(--secondary-brown)', marginBottom: '10px' }}>
                  No notifications found
                </h3>
                <p style={{ color: 'var(--secondary-brown)' }}>
                  {filter === 'all' 
                    ? "You don't have any notifications yet." 
                    : `No ${filter} notifications found.`}
                </p>
              </div>
            ) : (
              filteredNotifications.map(notification => (
                <div
                  key={notification.id}
                  className={`notification-page-item ${notification.read ? 'read' : 'unread'}`}
                >
                  <div className="notification-page-icon">
                    <span style={{ 
                      fontSize: '1.5rem',
                      color: getNotificationColor(notification.type)
                    }}>
                      {getNotificationIcon(notification.type)}
                    </span>
                  </div>
                  <div className="notification-page-content">
                    <div className="notification-page-header">
                      <h4 style={{ margin: 0, color: 'var(--dark-brown)' }}>
                        {notification.title}
                      </h4>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <span style={{ 
                          fontSize: '0.8rem', 
                          color: 'var(--secondary-brown)',
                          background: 'var(--cream)',
                          padding: '2px 8px',
                          borderRadius: '10px'
                        }}>
                          {notification.type}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--secondary-brown)' }}>
                          {notification.time}
                        </span>
                      </div>
                    </div>
                    <p style={{ margin: '10px 0', color: 'var(--text-dark)' }}>
                      {notification.message}
                    </p>
                    {notification.link && (
                      <button
                        className="btn btn-primary"
                        style={{ padding: '5px 15px', fontSize: '0.9rem' }}
                        onClick={() => navigate(notification.link)}
                      >
                        View Details
                      </button>
                    )}
                  </div>
                  <div className="notification-page-actions">
                    {!notification.read && (
                      <button
                        className="btn btn-secondary"
                        style={{ padding: '5px 10px', fontSize: '0.8rem' }}
                        onClick={() => markAsRead(notification.id)}
                      >
                        Mark Read
                      </button>
                    )}
                    <button
                      className="btn btn-danger"
                      style={{ padding: '5px 10px', fontSize: '0.8rem' }}
                      onClick={() => deleteNotification(notification.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications