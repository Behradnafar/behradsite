
import React, { useEffect, useState } from 'react';
import PortfolioContext from '../contexts/PortfolioContext';

const PortfolioGlobalState = props => {
    const [menuButtonsData, setMenuButtonsData] = useState([]);
    const [socialMediaButtonsData, setSocialMediaButtonsData] = useState([]);

    useEffect(() => {
        const menuButtonsDataTemp = [
            { text: 'Home', fontClass: 'fa-user' },
            { text: 'Resume', fontClass: 'fa-file-text' },
            { text: 'Portfolio', fontClass: 'fa-suitcase' },
            { text: 'Contact', fontClass: 'fa-paper-plane' },
        ];
        setMenuButtonsData(menuButtonsDataTemp);

        const socialMediaButtonsDataTemp = [
            { fontClass: 'fa-linkedin' },
            { fontClass: 'fa-github' }
        ];
        setSocialMediaButtonsData(socialMediaButtonsDataTemp);
    }, []);



    return (
        <PortfolioContext.Provider value={{
            menuButtonsData,
            socialMediaButtonsData
        }}>
            {props.children}
        </PortfolioContext.Provider>
    );
};

export default PortfolioGlobalState;