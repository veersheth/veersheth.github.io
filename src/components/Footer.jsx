import React from 'react';
import "./styles/Footer.scss"


const Contact = () => {

    const year = new Date().getFullYear();

    return (
        <section id='footer'>
            <div id="contact">
                <a href='mailto:veerksheth@gmail.com?subject=;)'>
                <div className="email ">
                    Email
                </div>
                </a>
                
                <a href='https://github.com/veer258'>
                    <i class="social-media-icon contact-method fa-brands fa-github " >
                    <span className="media-info">GitHub</span>
                </i>
                </a>
                <a href="https://veer258.medium.com">
                   <i class="social-media-icon fa-brands fa-medium contact-method " >
                    <span className="media-info">Blog</span>
                </i> 
                </a>
                <a href='https://instagram.com/vmax258'>
                    <i class="social-media-icon fa-brands fa-instagram contact-method " >
                    <span className="media-info">Instagram</span>
                </i>
                </a>
                <a href='https://twitter.com/vmax258'>
                    <i class="social-media-icon fa-brands fa-twitter contact-method " >
                    <span className="media-info">Twitter</span>
                </i>
                </a>
                <a href='https://www.youtube.com/channel/UCsv0kp2aBmOcEXYEqI5fTiQ'>
                    <i class="social-media-icon fa-brands fa-youtube contact-method " >
                    <span className="media-info">YouTube</span>
                </i>
                </a>
                
            </div>
            <div className="copyright">Copyright © {year} Veer Sheth</div>
        </section>
    );
};

export default Contact;
