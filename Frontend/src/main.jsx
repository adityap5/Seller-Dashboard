import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Display from './pages/Display.jsx'
import SellerInput from './pages/SellerInput.jsx'
import ProductPage from './pages/ProductPage.jsx'
import Cart from './pages/Cart.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage / >} />
        <Route path="/register" element={<Register / >}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/admin" element={<SellerInput />}/>
        <Route path="/products" element={<Display />}/>
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart/>} />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
