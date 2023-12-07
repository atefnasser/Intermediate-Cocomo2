// src/pages/about/About.tsx

import React from 'react';
import './About.css'; // Assuming you will create a CSS file for styling the About page

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                This is the about page for our application, where we describe the purpose
                and background of our project. Here you can include information about the 
                COCOMO II model and how this app helps users to estimate software development cost.
            </p>
            {/* Add more content as needed */}
        </div>
    );
};

export default About;
