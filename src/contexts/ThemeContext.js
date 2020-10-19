import React, { useState, createContext } from 'react';
import useToggleState from "../hooks/useToggleState";

export default function ThemeContext(props) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <div>
            <ThemeContext.Provider value={isDarkMode,setIsDarkMode}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}
