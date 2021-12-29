import React from 'react';

const SocialMediaButton = ({ fontClass }) => {
    return (
        <button className={`fa ${fontClass} social-media-btn mx-2 border-0 font-weight-bold font-17 black-btn`} style={{ width: '50px', height: '50px' }}/>
    );
};

export default SocialMediaButton;