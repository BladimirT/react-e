import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { EcommerceProvider } from './context/EcommerceProvider'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EcommerceProvider>
      <RouterProvider router={router} />
    </EcommerceProvider>
  </React.StrictMode>,
)
