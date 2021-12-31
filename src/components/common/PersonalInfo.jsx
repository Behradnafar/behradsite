import React from 'react';

const PersonalInfo = ({ title, value }) => {
    return (
        <div className='d-flex mb-2'>
            <p className='bg-custom-yellow mb-0 w-25 text-center'>{title}</p>
            <p className='bg-black text-white mb-0 ml-2 px-4'>{value}</p>
        </div>
    );
};

export default PersonalInfo;