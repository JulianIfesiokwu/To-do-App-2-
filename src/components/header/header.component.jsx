import React from "react";

import icon from '../../images/icon-sun.svg';

import './header.styles.css'

const HeaderContainer = (toggleTheme) => {

    return (
        <div className='header'>
            <h1 className='title'>todo</h1>
            <img className='mode-icon' src={icon} alt='icon' onClick={() => toggleTheme}/>
        </div>
    )
}

export default HeaderContainer;