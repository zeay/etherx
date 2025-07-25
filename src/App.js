import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
//import DemoProduct from './pages/DemoProduct';

// Utils
import ScrollToTop from './components/ScrollToTop';
import { useDocTitle } from './components/CustomHook';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  }, []);

  useDocTitle("EtherX | India-First Sovereign Tech Infrastructure");

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}

export default App;
