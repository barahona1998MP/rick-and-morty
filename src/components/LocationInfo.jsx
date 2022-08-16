import React from 'react'

const LocationInfo = ({location}) => {
    console.log(location)
    return (
    <article className='location'>
        <h2 className='location__name'>{location?.name}</h2>
        <ul className='location__item'>
            <li className='location__list'><span>Type: </span>{location?.type}</li>
            <li className='location__list'><span>Dimension: </span>{location?.dimension}</li>
            <li className='location__list'><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo