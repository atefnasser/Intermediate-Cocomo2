// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toolbar from './components/header/header';
import NavBar from './components/navbar/NavBar'; // Make sure this import path is correct
import MainPage from './pages/main/main-page';
import HelpPage from './components/help/HelpPage';
import About from './components/about/About';
import HistoryPage from './components/history/HistoryPage'; // Create this component
import Footer from './components/footer/Footer';
import { HistoryProvider } from './components/history/HistoryContext';

function App() {
  return (
    <HistoryProvider>
      <Router>
        <div className='flex flex-col min-h-screen w-full'>
          <Toolbar />
          <NavBar /> {/* Include the NavBar component */}
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HistoryProvider>
  );
}

export default App;