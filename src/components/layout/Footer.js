import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="copyright">
                <p>React-Pop 2020 - CManuel Hernández</p>
            </div>
            <div className="social">
                <a href="http://localhost:3000/" className="support">Contact Us</a>
                <a href="https://www.facebook.com/" className="face">f</a>
                <a href="https://twitter.com/" className="tweet">t</a>
                <a href="https://www.linkedin.com/" className="linked">in</a>
            </div>
        </footer>
    );
};

export default Footer;
