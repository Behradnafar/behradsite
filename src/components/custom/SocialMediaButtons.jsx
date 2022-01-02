import React, { useContext } from 'react';
import PortfolioContext from '../../contexts/PortfolioContext';
import SocialMediaButton from '../common/SocialMediaButton';

const SocialMediaButtons = () => {
    const context = useContext(PortfolioContext);

    return (
        <div className='d-flex justify-content-center mb-2'>
            {(context.socialMediaButtonsData ?? []).map(b => (
                <SocialMediaButton fontClass={b.fontClass} />
            ))}
        </div>
    );
};

export default SocialMediaButtons;