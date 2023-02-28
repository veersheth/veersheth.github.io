import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


import "./styles/Footer.css"


const Contact = () => {

    const year = new Date().getFullYear();

    return (
        <section id='footer'>
            <div id="contact">
                <div className="email">Email</div>
                <FontAwesomeIcon className="social-media-icon" icon={brands('github')} />
                <FontAwesomeIcon className="social-media-icon" icon={brands('medium')} />
                <FontAwesomeIcon className="social-media-icon" icon={brands('instagram')} />
                <FontAwesomeIcon className="social-media-icon" icon={brands('twitter')} />
                <FontAwesomeIcon className="social-media-icon" icon={brands('youtube')} />
            </div>
            <div className="copyright">Copyright © {year} Veer Sheth</div>
        </section>
    );
};

export default Contact;
