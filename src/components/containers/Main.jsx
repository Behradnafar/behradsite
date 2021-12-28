import React from 'react';
import Profile from './Profile';
import Menu from './Menu';

const Main = () => {
    return ( 
        <div className='d-flex flex-column main m-auto justify-content-between'>
            <Profile/>
            <Menu/>
        </div>
     );
};
 
export default Main;