import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  </React.StrictMode>,
)
