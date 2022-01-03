import { createContext } from "react";

const PortfolioContext = createContext({
    menuButtonsData: [],
    socialMediaButtonsData: [],
    personalInfosData: [],
    resumeTabData:[],

    handleSelectMenuButton: () => { }
});

export default PortfolioContext;