import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {

    
    const error =useRouteError();// Here useRouteError(); actually fetches the error and return all the details about the error ..
    console.log(error);
  return (
    <div>
        Something Went Wrong {error.status}
        <p>{error.data}</p>
    
    </div>
  )
}
