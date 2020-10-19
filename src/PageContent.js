import React,{ useContext } from 'react';
import {ThemeContext} from "./contexts/ThemeContext";

export default function PageContent(props) {
    const { isDarkMode } = useContext(ThemeContext);
    const styles={
        backgroundColor: isDarkMode ? "	#C8C8C8" : "white",
    };
    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}
