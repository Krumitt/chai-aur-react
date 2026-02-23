import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext();
export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    function toggleTheme() {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}