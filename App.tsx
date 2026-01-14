import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Tours from './pages/Tours';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Dashboard from './pages/Dashboard';
import { Layout } from './components/Layout';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/tours" element={<Layout><Tours /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/faq" element={<Layout><FAQ /></Layout>} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard has its own layout */}
      </Routes>
    </HashRouter>
  );
};

export default App;