import { createContext } from "react";

const PortfolioContext = createContext({
    menuButtonsData: [],
    socialMediaButtonsData: [],
    personalInfosData: [],

    handleSelectMenuButton: () => { }
});

export default PortfolioContext;