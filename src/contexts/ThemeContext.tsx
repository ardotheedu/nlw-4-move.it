import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import Cookie from 'js-cookie';

interface ThemeContextData {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
};

interface ThemeProviderProps {
    children: ReactNode;

};

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState('light');

      useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
        } else {
          setTheme('light');
        }
      }, [theme]);
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}> 
            {children}
        </ThemeContext.Provider>
    );
}