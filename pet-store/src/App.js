import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';

import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<ProductDetail />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
