import React from 'react';

const MenuButton = ({ text, fontClass, index }) => {
    return (
        <button className={`d-flex bg-custom-yellow w-100 h-25 border-left-0 border-right-0 border-bottom-gray ${index == 0 ? 'border-top-gray' : 'border-top-0' }`}>
            <p className='my-auto w-85 font-weight-bold'>{text}</p>
            <div className='border-left-gray h-75 my-auto' />
            <span className={`fa ${fontClass} size-fit-content my-auto w-15`} />
        </button>
    );
};

export default MenuButton;