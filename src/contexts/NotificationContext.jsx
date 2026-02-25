import React, { createContext, useContext, useState } from 'react'

const NotificationContext = createContext()

export const useNotifications = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider')
  }
  return context
}

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'order',
      title: 'New Order Received',
      message: 'You have received a new order for Tribal Pottery',
      time: '2 hours ago',
      read: false,
      link: '/artisan-dashboard'
    },
    {
      id: 2,
      type: 'system',
      title: 'Platform Update',
      message: 'New features have been added to your dashboard',
      time: '1 day ago',
      read: false,
      link: '/customer-home'
    },
    {
      id: 3,
      type: 'product',
      title: 'Product Approved',
      message: 'Your Bamboo Basket has been approved and is now live',
      time: '3 days ago',
      read: true,
      link: '/artisan-dashboard'
    }
  ])

  const [unreadCount, setUnreadCount] = useState(
    notifications.filter(notification => !notification.read).length
  )

  const addNotification = (notification) => {
    const newNotification = {
      id: Date.now(),
      time: 'Just now',
      read: false,
      ...notification
    }
    setNotifications(prev => [newNotification, ...prev])
    setUnreadCount(prev => prev + 1)
  }

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    )
    setUnreadCount(prev => Math.max(0, prev - 1))
  }

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    )
    setUnreadCount(0)
  }

  const deleteNotification = (id) => {
    const notification = notifications.find(n => n.id === id)
    setNotifications(prev => prev.filter(notification => notification.id !== id))
    if (notification && !notification.read) {
      setUnreadCount(prev => Math.max(0, prev - 1))
    }
  }

  const clearAllNotifications = () => {
    setNotifications([])
    setUnreadCount(0)
  }

  const value = {
    notifications,
    unreadCount,
    addNotification,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    clearAllNotifications
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}