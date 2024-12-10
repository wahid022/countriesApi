import { useState } from "react";
import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryCard from "./components/CountryCard";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";

const App = () => {

    //here query is used to store the types serched text ..

  const [query,setQuery]=useState('');

  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery}/>
          <SelectMenu />
        </div>

        <CountriesList query={query}/>
      </main>
    
    </>
  );
};

export default App;
