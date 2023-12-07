import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Toolbar from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import MainPage from './pages/main/main-page';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import "./App.css";

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };

  return (
    <Router>
      <div className='flex'>
        {/* Toggle button for the sidebar */}
        <button onClick={toggleSidebar}>Open Sidebar</button>

        {/* Pass the isOpen and toggleSidebar props to the Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main content area */}
        <div className='flex flex-col min-h-screen w-full'>
          <Toolbar />
          <Routes> {/* Updated component name */}
            <Route exact path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            {/* Update other routes as needed */}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
