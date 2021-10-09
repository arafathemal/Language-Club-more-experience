import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <div>
                <h4>language club</h4>
                <small>
                    Language learning has been shown to improve a student's cognitive function.
                    <li>Enhanced Problem Solving Skills</li>
                    <li>Improved Verbal and Spatial Abilities</li>
                    <li>Improved Memory Function</li>
                    
                </small>
            </div>
            <div>
            <h4>about us</h4>
            <small>
                At Middlebury Language Schools, we are strong advocates for the importance of mastering a second language. Both personally and professionally, being bilingual can bring you several advantages.
                </small>
            </div>
            <div>
                <h4>contact us</h4>
                <small>Address: Bonani-320kha, sector:34</small>
                <br />
                <small>Phone: 013002342463</small>
                <br />
                <small>Email: languageclub@gmail.com</small>
            </div>
            
        </div>
    );
};

export default Footer;