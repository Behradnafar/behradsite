
import React, { useEffect, useState } from 'react';
import PortfolioContext from '../contexts/PortfolioContext';

const PortfolioGlobalState = props => {
    const [menuButtonsData, setMenuButtonsData] = useState([]);
    const [socialMediaButtonsData, setSocialMediaButtonsData] = useState([]);
    const [personalInfosData, setPersonalInfosData] = useState([]);


    useEffect(() => {
        const menuButtonsDataTemp = [
            { id: 1, text: 'Home', fontClass: 'fa-user', isSelected: true },
            { id: 2, text: 'Resume', fontClass: 'fa-file-text', isSelected: false },
            { id: 3, text: 'Portfolio', fontClass: 'fa-suitcase', isSelected: false },
            { id: 4, text: 'Contact', fontClass: 'fa-paper-plane', isSelected: false },
        ];
        setMenuButtonsData(menuButtonsDataTemp);

        const socialMediaButtonsDataTemp = [
            { fontClass: 'fa-linkedin' },
            { fontClass: 'fa-github' }
        ];
        setSocialMediaButtonsData(socialMediaButtonsDataTemp);

        const personalInfosDataTemp = [
            { title: 'Address', value: 'Canada' },
            { title: 'Email', value: 'behradnafar@gmail.com' },
            { title: 'Phone', value: '0016473302512' },
        ];
        setPersonalInfosData(personalInfosDataTemp);

    }, []);

    const handleSelectMenuButton = (id, e) => {
        const selectedMenuButton = menuButtonsData.find(m => m.id === id);
        selectedMenuButton.isSelected = true;
        e.preventDefault();
    };



    return (
        <PortfolioContext.Provider value={{
            menuButtonsData,
            socialMediaButtonsData,
            personalInfosData,

            handleSelectMenuButton
        }}>
            {props.children}
        </PortfolioContext.Provider>
    );
};

export default PortfolioGlobalState;