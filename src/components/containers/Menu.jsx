import React, { useEffect } from 'react';
import MenuButtons from '../custom/MenuButtons';
import SocialMediaButtons from '../custom/SocialMediaButtons';

const Menu = () => {
    const menuButtonsData = [
        { text: 'Home', fontClass: 'fa-user' },
        { text: 'Resume', fontClass: 'fa-file-text' },
        { text: 'Portfolio', fontClass: 'fa-suitcase' },
        { text: 'Contact', fontClass: 'fa-paper-plane' },
    ];
    
    const socialMediaButtonsData = [
        { fontClass: 'fa-linkedin' },
        { fontClass: 'fa-github' }
    ];

    return (
        <div className='d-flex flex-column justify-content-between bg-custom-yellow Menu'>
            <MenuButtons menuButtonsData={menuButtonsData} />
            <SocialMediaButtons socialMediaButtonsData={socialMediaButtonsData} />
        </div>
    );
};

export default Menu;