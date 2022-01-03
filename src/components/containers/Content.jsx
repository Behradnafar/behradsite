import React, { useContext } from 'react';
import PortfolioContext from '../../contexts/PortfolioContext';
import HomeContent from './HomeContent';
import ResumeContent from './ResumeContent';
import PortfolioContent from './PortfolioContent';
//import ContactContent1 from './ContactContent1';


const Content = () => {
    const context = useContext(PortfolioContext);
    let page;

    switch (context.getSelectedPageId()) {
        case 1:
            page = <HomeContent />;
            break;
        case 2:
            page = <ResumeContent />;
            break;
        case 3:
            page = <PortfolioContent />;
            break;
        case 4:
            //page = <ContactContent1 />;
            break;

        default:
            break;
    }

    return (
        <div className='bg-white h-73 w-100'>
            {page}
        </div>
    );
};

export default Content;