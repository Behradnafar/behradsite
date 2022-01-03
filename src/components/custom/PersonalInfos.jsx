import React, { useContext } from 'react';
import PortfolioContext from '../../contexts/PortfolioContext';
import PersonalInfo from '../common/PersonalInfo';

const PersonalInfos = () => {
    const context = useContext(PortfolioContext);

    return (
        <div className='d-flex flex-column'>
            {context.personalInfosData.map((p, i) => (
                <PersonalInfo key={i} title={p.title} value={p.value} />
            ))}
        </div>
    );
};

export default PersonalInfos;