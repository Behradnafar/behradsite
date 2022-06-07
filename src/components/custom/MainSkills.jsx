import React, { useContext } from 'react';
import PortfolioContext from '../../contexts/PortfolioContext';
import MainSkill from '../common/MainSkill';

const MainSkills = () => {
    const context = useContext(PortfolioContext);

    return (
        <div className='d-flex flex-column mt-1'>
            {context.mainSkillsData.map(m => (
                <MainSkill text={m.text} percent={m.percent} />
            ))}
        </div>
    );
};

export default MainSkills;