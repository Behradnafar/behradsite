
import React from 'react';
import PortfolioContext from '../contexts/PortfolioContext';

const PortfolioGlobalState = (props) => {
    return (
        <PortfolioContext.Provider value={{  }}>
            {props.children}
        </PortfolioContext.Provider>
    );
};

export default PortfolioGlobalState;