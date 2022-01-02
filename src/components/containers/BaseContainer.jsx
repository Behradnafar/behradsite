import React from 'react';
import PortfolioGlobalState from '../../global-states/PortfolioGlobalState';
import Main from './Main';


const BaseContainer = () => {
    return (
        <PortfolioGlobalState>
            <Main/>
        </PortfolioGlobalState>
    );
};

export default BaseContainer;