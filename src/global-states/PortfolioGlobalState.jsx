
import React, { useEffect, useState } from 'react';
import PortfolioContext from '../contexts/PortfolioContext';

const PortfolioGlobalState = props => {
    const [menuButtonsData, setMenuButtonsData] = useState([]);
    const [socialMediaButtonsData, setSocialMediaButtonsData] = useState([]);
    const [personalInfosData, setPersonalInfosData] = useState([]);
    const [resumeTabData, setResumeTabData] = useState([]);

    useEffect(() => {
        const menuButtonsDataTemp = [
            { id: 1, text: 'Home', fontClass: 'fa-user', isSelected: true, title1: 'Welcome To', title2: 'My Profile' },
            { id: 2, text: 'Resume', fontClass: 'fa-file-text', isSelected: false, title1: 'Resume Of', title2: 'Behrad Nafar' },
            { id: 3, text: 'Portfolio', fontClass: 'fa-suitcase', isSelected: false, title1: 'Portfolio', title2: '' },
            { id: 4, text: 'Contact', fontClass: 'fa-paper-plane', isSelected: false, title1: 'Contact', title2: '' },
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

        const resumeTabDataTemp = [
            { id: 1, text:'Skills', isSelected: true },
            { id: 2, text:'Educations', isSelected: false },
            { id: 3, text:'Employment', isSelected: false },
        ];
        setResumeTabData(resumeTabDataTemp);
    }, []);

    const handleSelectMenuButton = (id, e) => {
        const menuButtonsDataTemp = [...menuButtonsData];
        menuButtonsDataTemp.forEach(m => m.isSelected = false);

        const selectedMenuButton = menuButtonsDataTemp.find(m => m.id === id);
        selectedMenuButton.isSelected = true;
        setMenuButtonsData(menuButtonsDataTemp);

        e.preventDefault();
    };

    const getSelectedTitle = () => {
        const selectedMenuButtonsData = menuButtonsData.find(m => m.isSelected);
        const title = [selectedMenuButtonsData?.title1, selectedMenuButtonsData?.title2];
        return title;
    };

    const getSelectedPageId = () => {
        const selectedMenuButtonsData = menuButtonsData.find(m => m.isSelected);
        return selectedMenuButtonsData?.id;
    };

    return (
        <PortfolioContext.Provider value={{
            menuButtonsData,
            socialMediaButtonsData,
            personalInfosData,
            resumeTabData,

            handleSelectMenuButton,
            getSelectedTitle,
            getSelectedPageId    
        }}>
            {props.children}
        </PortfolioContext.Provider>
    );
};

export default PortfolioGlobalState;