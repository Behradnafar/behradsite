import React from 'react';
import MainSkills from '../custom/MainSkills';

const SkillsContainer = () => {
    return (
        <div className='d-flex flex-column w-100 h-87'>
            <div className='w-90 h-90 m-auto'>
                <p className='mb-0 font-weight-bold'>MY SKILLS</p>
                <MainSkills />
            </div>
        </div>
    );
};

export default SkillsContainer;