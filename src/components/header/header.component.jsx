import React from "react";

import sunIcon from '../../images/icon-sun.svg';
import moonIcon from '../../images/icon-moon.svg';

import './header.styles.css'

const HeaderContainer = ({ toggleTheme, theme }) => {

    return (
        <div className='header'>
            <h1 className='title'>todo</h1>
            <img 
            className='mode-icon' 
            src={theme ? sunIcon : moonIcon} 
            alt='icon' 
            value={theme} 
            onClick={() => toggleTheme(theme)}/>
        </div>
    )
}

export default HeaderContainer;