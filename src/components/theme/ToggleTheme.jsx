import React from 'react'
import {useTheme} from '../../context/ThemeContext'
import '../../inex.css'

const ToggleTheme = ()=>{
    const {isDarkMode, toggleTheme} = useTheme();

    return(
        <>
            <div>
                <button onCick={toggleTheme}>
                    toggle
                </button>
                {isDarkMode ? "darkmode" : 'lihtmode'}
            </div>
        </>
    )
}