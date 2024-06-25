import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Login from './components/Login/Login';
import HomePage from './components/pages/HomePage/HomePage';
import AboutPage from './components/pages/AboutPage/About';
import Contact from './components/pages/ContactUs/Contact';
import Login1 from './components/Login/Login1';
import BagPage from './components/pages/BagPage/BagPage';
import { Provider } from 'react-redux';
import { store } from './components/Store/store';


function App() {
  return (
    <Provider store={store}>    
      <Router>
        <Routes>
        <Route path = "/"  element={<Login />} />
        <Route path="Homepage" element={<HomePage />} />
        <Route path="Shopnowpage" element={<HomePage />} />
        <Route path="Aboutpage" element={<AboutPage />} />
        <Route path="Bagpage" element={<BagPage />} />
        <Route path="Contactpage" element={<Contact />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
