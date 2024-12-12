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

    {/* setQuery is passed to both the components so that the query is set and we can search accordingly or show those items on the page  */}
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery}/>
      </div>
      <CountriesList query={query} />
    </main>
  );
}
