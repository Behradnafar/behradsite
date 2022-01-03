import React from 'react';
import TabButtons from '../custom/TabButtons';
import SkillsContainer from './SkillsContainer';

const ResumeContent = () => {
    return ( 
        <div className='w-100 h-100'>
            <TabButtons/>
            <div className='h-87 w-100'>
                <SkillsContainer/>
            </div>
        </div>
     );
};
 
export default ResumeContent;