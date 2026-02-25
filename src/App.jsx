import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NotificationProvider } from './contexts/NotificationContext'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RoleSelection from './pages/RoleSelection'
import CustomerHome from './pages/CustomerHome'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ArtisanDashboard from './pages/ArtisanDashboard'
import AddProduct from './pages/AddProduct'
import DeleteProduct from './pages/DeleteProduct'
import AdminDashboard from './pages/AdminDashboard'
import ConsultantDashboard from './pages/ConsultantDashboard'
import Notifications from './pages/Notifications'
import { initialProducts } from './data/products'
import './styles/App.css'

function App() {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState(initialProducts)

  return (
    <NotificationProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/role-selection" element={<RoleSelection setUser={setUser} />} />
            <Route path="/customer-home" element={<CustomerHome user={user} cart={cart} setCart={setCart} products={products} />} />
            <Route path="/product/:id" element={<ProductDetail user={user} cart={cart} setCart={setCart} products={products} />} />
            <Route path="/cart" element={<Cart user={user} cart={cart} setCart={setCart} />} />
            <Route path="/checkout" element={<Checkout user={user} cart={cart} setCart={setCart} />} />
            <Route path="/artisan-dashboard" element={<ArtisanDashboard user={user} />} />
            <Route path="/add-product" element={<AddProduct user={user} setProducts={setProducts} products={products} />} />
            <Route path="/delete-product" element={<DeleteProduct user={user} products={products} setProducts={setProducts} />} />
            <Route path="/admin-dashboard" element={<AdminDashboard user={user} />} />
            <Route path="/consultant-dashboard" element={<ConsultantDashboard user={user} />} />
            <Route path="/notifications" element={<Notifications user={user} />} />
          </Routes>
        </div>
      </Router>
    </NotificationProvider>
  )
}

export default App