import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Registration from './pages/Registration';
import MyNavbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pages/AboutUs" element={<AboutUs />} />
        <Route path="/pages/ContactUs" element={<ContactUs />} />
        <Route path="/pages/Login" element={<Login />} />
        <Route path="/pages/Registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}
export default App;

