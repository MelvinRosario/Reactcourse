import React from 'react';

const Footer = () => {    
    const year = new Date();
    return (
        <footer>
            Copy rights &copy; reserved by Ecom {year.getFullYear()}
        </footer>
    );
};

export default Footer;
