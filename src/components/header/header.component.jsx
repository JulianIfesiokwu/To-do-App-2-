import React from "react";

import icon from '../../images/icon-sun.svg';

import './header.styles.css'

function HeaderContainer() {

    return (
        <div className='header'>
            <h1 className='title'>todo</h1>
            <img className='view-icon' src={icon} alt='icon'/>
        </div>
    )
}

export default HeaderContainer;