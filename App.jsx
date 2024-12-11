import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet /> 
      
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
