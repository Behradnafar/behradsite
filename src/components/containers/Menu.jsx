import React, { useEffect } from 'react';
import MenuButtons from '../custom/MenuButtons';
import SocialMediaButtons from '../custom/SocialMediaButtons';

const Menu = () => {
    return (
        <div className='d-flex flex-column justify-content-between bg-custom-yellow Menu'>
            <MenuButtons />
            <SocialMediaButtons />
        </div>
    );
};

export default Menu;