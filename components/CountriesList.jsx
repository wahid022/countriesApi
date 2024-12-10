import React, { useState } from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

//this is the countries Container Component which contains individual card inside it ..

export default function CountriesList({ query }) {
  return (
    <>
      <div className="countries-container">
        {/* here filter for the searched countries it will return the array and then iterating on those countries using map to display those countries.. */}
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .map((country) => {
            // console.log(country);
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                // Its the optional Chaining which i am using just because kisi kisi ka capital nahi hai thats why ..So here it will give undefined agar koi bhi capital nahi honga ..
                capital={country.capital?.[0]}
              />
            );
          })}
      </div>
    </>
  );
}
