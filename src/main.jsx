import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './views/Home';
import Contacts from './views/Contacts';
import NotFound from './views/NotFound/NotFound';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
