import { useState } from "react";
import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import { useOutletContext } from "react-router-dom";


export default function Home() {
  //here query is used to store the types serched text ..
  const [query, setQuery] = useState("");
  const [isDark] =useOutletContext(); // useOutletContext() is used to fetch data passed from <Outlet> and it contains [isDark,setIsDark]

  return (
    <main className={`${isDark? 'dark': ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>

      <CountriesList query={query} />
    </main>
  );
}
