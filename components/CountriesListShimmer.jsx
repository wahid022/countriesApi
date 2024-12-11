import React from 'react'

import './CountriesListShimmer.css'

export default function CountriesListShimmer() {

  return (
    <div className="countries-container">
      {/* Array.from({ length: 10 }) - will fill the array with <div....></div> in everhy index of length 10*/}
      {Array.from({ length: 10 }).map((el, i) => {
        return <div key={i} className="country-card shimmer-card"></div>
      })}
    </div>
  )
}
