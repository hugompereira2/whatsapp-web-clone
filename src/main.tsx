import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "../src/styles/Global.scss"
import './fonts/Segoe/Segoe UI.ttf';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
