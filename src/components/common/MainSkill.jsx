import { Line } from 'rc-progress';
import React from 'react';

const MainSkill = ({ text, percent }) => {
    return (
        <div className='d-flex mt-2'>
            <p className='mb-0 w-30'>{text}</p>
            <Line percent={percent} strokeWidth="2" strokeColor="#f4d03f" trailWidth="2" trailColor="#edb50f75" className='w-70 mr-5' />
        </div>
    );
};

export default MainSkill;