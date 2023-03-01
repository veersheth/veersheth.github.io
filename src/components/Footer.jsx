import React from 'react';
import "./styles/Footer.css"


const Contact = () => {

    const year = new Date().getFullYear();

    return (
        <section id='footer'>
            <div id="contact">
                <div className="email contact-method">
                    Email
                </div>
                <i class="social-media-icon contact-method fa-brands fa-github">
                    <span className="media-info">GitHub</span>
                </i>
                <i class="social-media-icon fa-brands fa-instagram contact-method">
                    <span className="media-info">Instagram</span>
                </i>
                <i class="social-media-icon fa-brands fa-medium contact-method">
                    <span className="media-info">Blog</span>
                </i>
                <i class="social-media-icon fa-brands fa-twitter contact-method">
                    <span className="media-info">Twitter</span>
                </i>
                <i class="social-media-icon fa-brands fa-youtube contact-method">
                    <span className="media-info">YouTube</span>
                </i>
            </div>
            <div className="copyright">Copyright © {year} Veer Sheth</div>
        </section>
    );
};

export default Contact;
