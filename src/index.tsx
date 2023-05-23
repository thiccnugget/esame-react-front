import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './components/home/Home'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Teams from './components/teams/Teams';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/teams' element={<Teams />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
