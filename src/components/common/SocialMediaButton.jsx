import React from 'react';

const SocialMediaButton = ({ fontClass }) => {
    return (
        <button className={`${fontClass} social-media-btn`} style={{ width: '50px', height: '50px' }}/>
    );
};

export default SocialMediaButton;