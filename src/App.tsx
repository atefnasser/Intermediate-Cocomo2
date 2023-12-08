import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toolbar from './components/header/header';
import MainPage from './pages/main/main-page';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar'; // Ensure you have created this component
import "./App.css";

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen w-full'>
        <Toolbar />
        <NavBar /> {/* Include the NavBar component */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
