import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import App from './App'
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css/animate.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Provider } from 'react-redux';
import { store } from '../store';
import "@/styles/GlobalStyles.scss";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
          <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)
