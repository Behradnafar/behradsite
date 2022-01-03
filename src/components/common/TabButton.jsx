import React from 'react';

const TabButton = ({ id, text, isSelected }) => {
    return (
        <button className={`border-0 w-33 h-100 ${isSelected ? 'tab-button-selected' : 'tab-button'}`}>
            {text}
        </button>
    );
};

export default TabButton;