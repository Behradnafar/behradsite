import React from 'react';
import PersonalInfos from '../custom/PersonalInfos';

const HomeContent = () => {

    return (
        <div className='d-flex flex-column justify-content-between h-100 w-100 px-4 py-4 font-oswald'>
            <div className='d-flex flex-column'>
                <div className='d-flex font-weight-bold font-18'>
                    <p className='mb-0'>Hello, I am</p>
                    <p className='bg-custom-yellow ml-1 mb-0 px-1'>Behrad Nafar</p>
                </div>
                <p className='text-gray font-weight-bold text-17 mt-1 mb-0'>Web Developer</p>
                <p className='text-gray mt-3 mb-0 text-16'>
                    I have ten years experience as a web/interface designer.I have a love of clean, elegant styling.
                    I have lots of experience in the production of CSS and HTML for modern websites.
                </p>
            </div>
            <div className='position-relative' >
                <p className='font-17 font-weight-bold'>Personal Info</p>
                <PersonalInfos/>
                <div className='watermark-home'>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;