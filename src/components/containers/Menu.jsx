import React, { useEffect } from 'react';
import MenuButtons from '../custom/MenuButtons';
import SocialMediaButtons from '../custom/SocialMediaButtons';

const Menu = () => {
    let menuButtonsData = [], socialMediaButtonsData = [];
    useEffect(() => {
        menuButtonsData = [
            { text: 'Home', fontClass: 'fa-user' },
            { text: 'Resume', fontClass: 'fa-file-text' },
            { text: 'Portfolio', fontClass: 'fa-suitcase' },
            { text: 'Contact', fontClass: 'fa-paper-plane' },
        ];
        socialMediaButtonsData = [
            { fontClass: 'fa-linkedin' },
            { fontClass: 'fa-linkedin' }
        ];
    }, [menuButtonsData]);


    return (
        <div className='bg-custom-yellow Menu'>
            <MenuButtons menuButtonsData={menuButtonsData} />
            {/* <SocialMediaButtons socialMediaButtonsData={socialMediaButtonsData} /> */}
        </div>
    );
};

export default Menu;