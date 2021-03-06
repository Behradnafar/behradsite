import React from 'react';
import Profile from './Profile';
import Menu from './Menu';
import Header from './Header';
import Content from './Content';

const Main = () => {
    return (
        <div className='d-flex main m-auto justify-content-between'>
            <div className='d-flex flex-column justify-content-between w-30'>
                <Profile />
                <Menu />
            </div>
            <div className='d-flex flex-column justify-content-between w-68'>
                <Header />
                <Content />
            </div>
        </div>
    );
};

export default Main;