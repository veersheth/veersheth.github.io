import React from 'react';
import "./styles/Footer.css"


const Contact = () => {

    const year = new Date().getFullYear();

    return (
        <section id='footer'>
            <div id="contact">
                <div className="email contact-method has-link" data-link="mailto:vtube258@gmail.com?subject=;)">
                    Email
                </div>
                <i class="social-media-icon contact-method fa-brands fa-github has-link" data-link="https://github.com/veer258">
                    <span className="media-info">GitHub</span>
                </i>
                <i class="social-media-icon fa-brands fa-medium contact-method has-link" data-link="https://veer258.medium.com">
                    <span className="media-info">Blog</span>
                </i>
                <i class="social-media-icon fa-brands fa-instagram contact-method has-link" data-link="https://instagram.com/vmax258">
                    <span className="media-info">Instagram</span>
                </i>
                <i class="social-media-icon fa-brands fa-twitter contact-method has-link" data-link="https://twitter.com/vmax258">
                    <span className="media-info">Twitter</span>
                </i>
                <i class="social-media-icon fa-brands fa-youtube contact-method has-link" data-link="https://www.youtube.com/channel/UCsv0kp2aBmOcEXYEqI5fTiQ">
                    <span className="media-info">YouTube</span>
                </i>
            </div>
            <div className="copyright">Copyright © {year} Veer Sheth</div>
        </section>
    );
};

export default Contact;
