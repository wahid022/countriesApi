import React from 'react'
import countriesData from '../countriesData'
import CountryCard from './CountryCard'


//this is the countries Container Component which contains individual card inside it ..

export default function CountriesList() {
  return (

    <div className="countries-container">

      {/* Here iterating over the array and returning the each country card with difference in data passed as props */}
      {countriesData.map((country) => {

        console.log(country);
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
        )
      })}
    </div>
  )
}
