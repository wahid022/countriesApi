import React, { useContext, useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { useTheme } from "../hooks/useTheme";

export default function CountryDetails() {
  const params = useParams(); //Here params will give the Url name and it returns the object ...
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);

  const [notFound, setNotFound] = useState(false);
  const [isDark] =useTheme() // useContext() is used to fetch data passed from <Outlet> and it contains [isDark,setIsDark]

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          flag: data.flags.svg,
          tld: data.tld,
          languages: Object.values(data.languages).join(", "),
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", "),
          borders: [],
        });


        // Here if border is not present for the country then that country will not open so here initialyzed with empty array ...
        if (!data.borders) {
          data.borders = [];
        }


        //Here since for every border countries  the page is rendering multile times 
        // so i have made it inside the Promise.all  so that it will wait for all promises to get resolved and then run the 
        Promise.all(
          data.borders.map((border) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`) // Here return is written just to return in the form of array of promises..
              .then((res) => res.json())
              .then(([borderCountry]) => borderCountry.name.common); // [borderCountry] is actually extracting or destructuring the array in which object is stored 
          }) // till here it will return single promise at a tym but untill all promises are not returned and resolved 47 line will not execute 
        ).then((borders) => {
          setCountryData((prevState) => ({ ...prevState, borders }));
        });
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);

  console.log(countryData);
  // if not found state variable returns true it means no country then it will give the message country not found ..
  if (notFound) {
    return <div>Country Not Found</div>;
  }

  // If there are no countries either we will show the shimmer effect or just display the text as loading ..
  return countryData === null ? (
    "loading..."
  ) : (
    
    <main className={`${isDark? 'dark': ''}`}>    {/*  here applying the condition by using isDark State*/}
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          {" "}
          {/* here history.back() will take to the previous url */}
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData.population.toLocaleString("en-IN")}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital.join(", ")}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages}</b>
                <span className="languages"></span>
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
