import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contain">
                <p>
                    &copy; 2024 Made By Avnit Prakash. All rights reserved. 
                    <span className="separator">|</span>
                    <a href="/policy">Privacy Policy</a>
                    <span className="separator">|</span>
                    <a href="/policy">Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
