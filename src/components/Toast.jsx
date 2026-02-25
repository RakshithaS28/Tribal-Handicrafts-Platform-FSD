import React, { useEffect } from 'react'

const Toast = ({ notification, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(notification.id)
    }, 5000)

    return () => clearTimeout(timer)
  }, [notification.id, onClose])

  return (
    <div className={`toast ${notification.type}`}>
      <div className="toast-icon">
        {notification.type === 'success' && '✅'}
        {notification.type === 'error' && '❌'}
        {notification.type === 'warning' && '⚠️'}
        {notification.type === 'info' && 'ℹ️'}
      </div>
      <div className="toast-content">
        <div className="toast-title">{notification.title}</div>
        <div className="toast-message">{notification.message}</div>
      </div>
      <button className="toast-close" onClick={() => onClose(notification.id)}>
        ×
      </button>
    </div>
  )
}

export default Toast