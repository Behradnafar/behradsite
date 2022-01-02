import React, { useContext } from 'react';
import PortfolioContext from '../../contexts/PortfolioContext';
import MenuButton from '../common/MenuButton';

const MenuButtons = () => {
    const context = useContext(PortfolioContext);

    return (
        <div className='h-60 mt-3'>
            {(context.menuButtonsData ?? []).map((b, i) => (
                <MenuButton id={b.id} text={b.text} fontClass={b.fontClass} isSelected={b.isSelected} index={i} />
            ))}
        </div>
    );
};

export default MenuButtons;