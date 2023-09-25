import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'jquery'; // Import jQuery
import '@fancyapps/fancybox/dist/jquery.fancybox.css';
import '@fancyapps/fancybox';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
