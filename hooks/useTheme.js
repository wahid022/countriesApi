import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

///here storing value of one hook into another hook which is Themecontext  into useTheme
//ThemeContext has [isDark,setDark] as its value 

export const useTheme = () => useContext(ThemeContext)
