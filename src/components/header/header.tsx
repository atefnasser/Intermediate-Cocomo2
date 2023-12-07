// header.tsx
import React from 'react';
import { AppBar, Typography, Toolbar } from "@mui/material";
import "./header-style.css";

function Header() {
    const typographyStyles = {
        fontSize: '60px', // Adjust the font size as needed
        fontWeight: 500, // Adjust the font weight as needed
    };

    return (
        <AppBar position="static" id="main-toolbar-outer">
            <Toolbar>
                <Typography variant='h4' style={typographyStyles}>
                    Intermediate COCOMO II Calculator
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
