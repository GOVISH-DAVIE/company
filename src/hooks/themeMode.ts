import { useContext, useEffect } from "react"
import { ThemeMode, ThemeModeContext } from "../context/theme"
import { PaletteMode } from "@mui/material"
import { Cookie } from "next/font/google" 

const useThemeMode = () => {
    const context = useContext(ThemeModeContext)
     

    if (!context) {
        throw new Error("UseThemeMode must be used inside ThemeModeContext.Provider")
    }

    const changeMode = ({ mode }: { mode: PaletteMode }) => {
        context.setMode(mode)
    }
    const toggleColorMode = () => {
       context.setMode((prev) => {  
            // Cookies.add('theme',(prev === 'dark' ? 'light' : 'dark'), 7)
         return  (prev === 'dark' ? 'light' : 'dark')
    
         });
    
      };
    return {
        ...context, changeMode, toggleColorMode
    }
}
export default useThemeMode;