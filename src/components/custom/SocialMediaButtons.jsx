import React from 'react';
import SocialMediaButton from '../common/SocialMediaButton';

const SocialMediaButtons = ({ socialMediaButtonsData }) => {
    return (
        <div className='d-flex justify-content-center mb-2'>
            {(socialMediaButtonsData ?? []).map(b => (
                <SocialMediaButton fontClass={b.fontClass} />
            ))}
        </div>
    );
};

export default SocialMediaButtons;