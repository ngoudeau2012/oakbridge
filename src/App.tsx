import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MarketInsights from './pages/MarketInsights';
import ContactUs from './pages/ContactUs';
import './App.css';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/market-insights" element={<MarketInsights />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Analytics />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
