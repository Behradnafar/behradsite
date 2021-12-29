import React from 'react';
import MenuButton from '../common/MenuButton';

const MenuButtons = ({ menuButtonsData }) => {
    console.log(menuButtonsData);
    return (
        <div className='h-60 mt-3'>
            {menuButtonsData.map((b, i) => (
                <MenuButton text={b.text} fontClass={b.fontClass} index={i} />
            ))}
        </div>
    );
};

export default MenuButtons;