import React from 'react';

const TextBox = ({customPlaceholder}) => {
    return (
        <input type='text' placeholder={customPlaceholder} className='form-control'>
        </input>
    );
}

export default TextBox;