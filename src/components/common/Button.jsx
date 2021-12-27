import React from 'react';


const Button = ({customWidth, text}) => {
    //console.log(customWidth);
    return (
        <div style={{width:customWidth}} className='btn-success'>
            {text}
        </div>
    );
}

export default Button;