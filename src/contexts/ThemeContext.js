import React, { useState, createContext } from 'react';
import useToggleState from "../hooks/useToggleState";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
    const [isDarkMode, setIsDarkMode] = useToggleState(false);
    return (
        <div>
            <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}
