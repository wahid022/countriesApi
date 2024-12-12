import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const[isDark,setIsDark]=useTheme(); // useTheme() is a hook which is indirectly taking values from ThemeContext hook and is fetching data passed from <Outlet> and it contains [isDark,setIsDark]

  return (
    <header className={`header-container ${isDark? 'dark': ''}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Know About The World </a>
        </h2>
        <p className="theme-changer" onClick={() => {
          setIsDark(!isDark) // Here Setting the isDark as false or true depending upon the value of isDark State
          localStorage.setItem('isDarkMode', !isDark) // Saving the value of isDark in local storage so that on refreshing the value doesnt change ..
        }}>
          <i className={`fa-solid fa-${isDark ? 'sun': 'moon'}` }/>
          &nbsp;&nbsp;{isDark? 'Light': 'Dark'} Mode
        </p>
      </div>
    </header>
  );
}
