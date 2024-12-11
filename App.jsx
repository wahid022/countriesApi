import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {

  //here getting the value of isDark from the localStorage and then passing to the header and the outlet component 
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

  return (
    <>
      <Header theme ={[isDark, setIsDark]}/>
      <Outlet context={[isDark, setIsDark]}/> 
      
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
