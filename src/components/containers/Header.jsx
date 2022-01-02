import React, { useContext } from 'react';
import PortfolioContext from '../../contexts/PortfolioContext';

const Header = () => {
    const context = useContext(PortfolioContext);

    return ( 
        <div className='d-flex align-items-end bg-black h-25 font-30 font-oswald font-weight-bold'>
            <p className='text-custom-yellow ml-4 mr-3'>{context.getSelectedTitle()[0]}</p>
            <p className='text-white'>{context.getSelectedTitle()[1]}</p>
        </div>
     );
};
 
export default Header;