import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ejercicio1 from './practica/Ejercicio1.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Ejercicio1/>
  </StrictMode>,
)
