import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Make sure you have a corresponding CSS file for styles

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Home
            </NavLink>
            <NavLink to="/history" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                History
            </NavLink>
            <NavLink to="/help" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Help
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                About
            </NavLink>    </nav>
    );
};

export default NavBar;
