import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <a href="https://github.com/provostma21" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="3x" className="github hover:text-gray-500" />
                </a>
                <a href="https://github.com/provostma21" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" className="linkedin hover:text-gray-500" />
                </a>
                <a href="https://github.com/provostma21" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faStackOverflow} size="3x" className="stackoverflow hover:text-gray-500" />
                </a>
                <a href="https://github.com/provostma21" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faCoffee} size="3x" className="localcoffee hover:text-gray-500" />
                </a>
            </div>
        </div>

    );
}