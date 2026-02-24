import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { }
})
export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    function toggleTheme() {
        setTheme(theme => {
            if (theme === 'light') {

                return 'dark';
            }

            return 'light';
        });
    }
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const htmlElement = document.querySelector('html');
        htmlElement.classList.remove('dark', 'light');
        htmlElement.classList.add(theme);
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}