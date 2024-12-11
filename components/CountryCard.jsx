import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard({ name, flag, population, region, capital }) {
  // console.log(name);
  return (
    
    //Here <link > </link>tag is used to stop the rendering of the page ..

    <Link className="country-card" to={`/${name}`}>
      <img src={flag} alt={name + ' Flag'} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
      </div>
    </Link>
  )
}
