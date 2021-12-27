import React from 'react';

const TextArea = ({customPlaceholder}) => {
    return ( 
        <textarea placeholder={customPlaceholder} className='form-control' rows={3} > </textarea>

     );
}
 
export default TextArea;