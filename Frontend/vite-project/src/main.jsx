import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx';
import { BrowserRouter } from 'react-router-dom'
import CaptainContext from './context/CaptainContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Adding the react-router dom */}
    <CaptainContext>
      <UserContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContext>
    </CaptainContext>
  </StrictMode>,
)
