import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Esconde o loading screen quando o React estiver pronto
const hideLoading = () => {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.add('hide');
    setTimeout(() => {
      loadingScreen.remove();
    }, 500);
  }
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Esconde o loading após renderizar
setTimeout(hideLoading, 100);
