// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toolbar from './components/header/header';
import MainPage from './pages/main/main-page';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/sidebar'; // Import your new Sidebar component
import "./App.css";

function App() {
    return (
        <Router>
            <div className="flex">
                <Sidebar /> {/* Sidebar component on the left */}
                <div className='flex flex-col min-h-screen w-full'>
                    <Toolbar />
                    <Routes>
                        <Route exact path="/" element={<MainPage />} />
                        <Route path="/about" element={<About />} />
                        {/* Add more routes as needed */}
                    </Routes>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
