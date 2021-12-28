import React from 'react';
import MenuButtons from '../custom/MenuButtons';

const Menu = () => {
    const menuButtonsData = [
        {text: 'Home', fontClass: 'fa-user'},
        {text: 'Resume', fontClass: 'fa-file-text'},
        {text: 'Portfolio', fontClass: 'fa-suitcase'},
        {text: 'Contact', fontClass: 'fa-paper-plane'},
    ];

    return ( 
        <div className='bg-custom-yellow Menu'>
            <MenuButtons menuButtonsData={menuButtonsData}/>
        </div>
    );
};
 
export default Menu;