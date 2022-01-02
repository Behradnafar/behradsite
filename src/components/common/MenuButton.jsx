import React, { useContext } from 'react';
import PortfolioContext from '../../contexts/PortfolioContext';

const MenuButton = ({ id, text, fontClass, isSelected, index }) => {
    const context = useContext(PortfolioContext);

    return (
        <button className={`d-flex black-btn w-100 h-25 border-left-0 border-right-0 border-bottom-gray 
                            ${isSelected ? 'bg-black text-custom-yellow' : 'bg-custom-yellow'}
                            ${index == 0 ? 'border-top-gray' : 'border-top-0'}`}
            onClick={e => context.handleSelectMenuButton(id, e)}
        >
            <p className='my-auto w-85 font-weight-bold'>{text}</p>
            <div className='border-left-gray h-75 my-auto' />
            <span className={`fa ${fontClass} size-fit-content my-auto w-15`} />
        </button>
    );
};

export default MenuButton;