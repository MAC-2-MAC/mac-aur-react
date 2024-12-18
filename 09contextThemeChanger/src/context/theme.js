import {createContext,useContext} from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    lightTheme:()=> { },
    darkTheme: ()=> { }
});

export const ThemeContextProvider = ThemeContext.Provider;

 export function useTheme(){
    return useContext(ThemeContext);
 }