import React from 'react'
import { ExternalLink } from 'react-external-link';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="copyright">
                <p>React-Pop 2020 - CManuel Hernández</p>
            </div>
            <div className="social">
                <ExternalLink href="http://localhost:3000/" className="support">Contact Us</ExternalLink>
                <ExternalLink href="https://www.facebook.com/" className="face">f</ExternalLink>
                <ExternalLink href="https://twitter.com/" className="tweet">t</ExternalLink>
                <ExternalLink href="https://www.linkedin.com/" className="linked">in</ExternalLink>
            </div>
        </footer>
    );
};

export default Footer;
