import React from "react";

export default function Header({theme}) {
  const[isDark,setIsDark]=theme;

  return (
    <header className={`header-container ${isDark? 'dark': ''}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
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
