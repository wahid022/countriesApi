import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";

const App = () => {
  //here getting the value of isDark from the localStorage and then passing to the header and the outlet component
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  return (
    <>
{/* <ThemeContext value={[isDark, setIsDark]}> is the context custom hook in which we are passing the value as props and it is accesed by the component by just using useContext() hook which provide to all the component.. */}

      <ThemeContext.Provider value={[isDark, setIsDark]}>        
        <Header />
        <Outlet />
      </ThemeContext.Provider>

      {/* here <Outlet / > is the feature of react-router-dom it will automatically fetch all the components which is under the url localhost://1234/ or 
      OR under the children routes [children: [
      {
        path: "/",
        element: <Home />
      },
      .
      .
      .
      ]*/}
    </>
  );
};

export default App;
