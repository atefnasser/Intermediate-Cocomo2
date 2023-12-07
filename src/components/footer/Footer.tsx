// src/components/Footer.tsx

import React from 'react';
import './footer-style.css'; // Assuming you'll create a CSS file for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} | Creators: Atef Nasser, Hussein Chamas, Mohammed Al-Mohammed, and William Elliott</p>
    </footer>
  );
};

export default Footer;
