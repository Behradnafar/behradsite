import React from 'react';

const SocialMediaButtons = ({ socialMediaButtonsData }) => {
    return (
        <div>
            {socialMediaButtonsData.map(b => (
                <SocialMediaButtons fontClass={b.fontClass} />
            ))}
        </div>
    );
};

export default SocialMediaButtons;