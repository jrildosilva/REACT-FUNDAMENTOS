import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme,setTheme] = useState('dark');

    function handleToggleTheme(){
     setTheme( prevState => prevState === 'dark' ? '🌞' : '😎');
    }



    return (
        <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}