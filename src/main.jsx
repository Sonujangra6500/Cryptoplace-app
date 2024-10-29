 import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CoincontextProvider from '../src/Context/CoinContext.jsx'

createRoot(document.getElementById('root')).render(
  <CoincontextProvider>
    <App />
     </CoincontextProvider>

)
