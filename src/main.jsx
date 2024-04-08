import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthComponent from './components/AuthComponent';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthComponent>
      <RouterProvider router={router} />
    </AuthComponent>
  </React.StrictMode>,
)
