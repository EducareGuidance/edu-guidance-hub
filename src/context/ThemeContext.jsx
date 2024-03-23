import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setDarkTheme] = useState(false);

    const handleDarkTheme = () => {
        setDarkTheme(!isDarkTheme)
        console.log('dk')
    }
    return (
        <ThemeContext.Provider value={{ isDarkTheme, handleDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext;