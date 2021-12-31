import React from 'react';
import PersonalInfo from '../common/PersonalInfo';

const PersonalInfos = ({ personalInfosData }) => {
    return (
        <div className='d-flex flex-column'>
            {personalInfosData.map(p => (
                <PersonalInfo title={p.title} value={p.value} />
            ))}
        </div>
    );
};

export default PersonalInfos;