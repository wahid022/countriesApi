import { useContext, useState } from "react";
import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import { ThemeContext } from "../contexts/ThemeContext";
import { useTheme } from "../hooks/useTheme";



export default function Home() {
  //here query is used to store the types serched text ..
  const [query, setQuery] = useState("");
  const [isDark] =useTheme(); // // useTheme() is a hook which is indirectly taking values from ThemeContext hook and is fetching data passed from <Outlet> and it contains [isDark,setIsDark]
  
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
