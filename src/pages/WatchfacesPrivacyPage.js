import React from 'react';
import '../components/styles/mobile-styles.scss';
import ColorThemeToggle from '../components/ColorThemeToggle';
import '../components/styles/WatchfacesPrivacyPage.scss';
import Footer from '../components/Footer';

const PrivacyPage = () => {
    return (
        <div className="App" data-theme="light">
        <ColorThemeToggle />
            <div className='privacy-policy'>
                <h1>
                    Privacy Policy
                </h1>
                <h2>Last Updated: October 17, 2023</h2> 
                <br />
                We do not collect, use or distribute any information or any personal data.
                <br />
                <br />
                If you have any questions or suggestions about our Privacy Policy, please send an email to contact us at <a href="mailto:veerksheth@gmail.com">veerksheth@gmail.com</a>
        </div>
        <Footer />
    </div>
    );
};

export default PrivacyPage;
