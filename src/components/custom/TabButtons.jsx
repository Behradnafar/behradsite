import React, { useContext } from 'react';
import PortfolioContext from '../../contexts/PortfolioContext';
import TabButton from '../common/TabButton';

const TabButtons = () => {
    const context = useContext(PortfolioContext);

    return (
        <div className='d-flex justify-content-between w-100 h-13'>
            {(context.resumeTabData ?? []).map(b => (
                <TabButton key={b.id} id={b.id} text={b.text} isSelected={b.isSelected} />
            ))}
        </div>
    );
};

export default TabButtons;