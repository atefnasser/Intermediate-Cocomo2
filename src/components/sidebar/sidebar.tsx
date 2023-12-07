// src/components/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css'; // Ensure this file exists and is correctly linked

const Sidebar = () => {
    return (
        <aside className="sidebar" aria-label="Sidebar">
            <div className="sidebar-content">
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                    Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                    About
                </NavLink>
                {/* Add more NavLink components for additional navigation items */}
            </div>
        </aside>
    );
};

export default Sidebar;
