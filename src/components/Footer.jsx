import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' 


import "./styles/Footer.css"


const Contact = () => {

    const year = new Date().getFullYear();

    return (
        <section id='footer'>
            <div id="contact">
                <div className="email">Email</div>
                <FontAwesomeIcon data-hover="GitHub" className="interactable social-media-icon" icon={brands('github')} />
                <FontAwesomeIcon data-hover="Blog" className="interactable social-media-icon" icon={brands('medium')} />
                <FontAwesomeIcon data-hover="Instagram" className="interactable social-media-icon" icon={brands('instagram')} />
                <FontAwesomeIcon data-hover="Twitter" className="interactable social-media-icon" icon={brands('twitter')} />
                <FontAwesomeIcon data-hover="YouTube" className="interactable social-media-icon" icon={brands('youtube')} />
            </div>
            <div className="copyright">Copyright © {year} Veer Sheth</div>
        </section>
    );
};

export default Contact;
