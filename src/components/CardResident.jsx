import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({url}) => {
    console.log(url)
    const resident = useFetch(url)

    const bg = {
        dead: '#B94343',
        alive: '#4AB648',
        unknown: '#938686'
    }
    let bgColor;
    if(resident?.status === 'Alive') {
        bgColor = bg.alive
    } else if(resident?.status === 'Dead') {
        bgColor = bg.dead
    } else {
        bgColor = bg.unknown
    }
    return (
    <article className='card'>
        <header className='card__header'>
            <img className='header__img' src={resident?.image} alt={`image of ${resident?.name}`} />
           <div className='header__container'>
            <div className="circle" style={{backgroundColor: bgColor}}></div>
            <span>{resident?.status}</span>
           </div>
        </header>
        <div className='card__info'>
            <h3 className='info__name'>{resident?.name}</h3>
            <hr className='info__border'/>
            <ul className='info__datos'>
                <li className='info__item'><span className='info__span'>Species: </span>{resident?.species}</li>
                <li className='info__item'><span className='info__span'>Origen: </span>{resident?.origin.name}</li>
                <li className='info__item'><span className='info__span'>Espisodes where appear: </span>{resident?.episode.length}</li>
            </ul>
        </div>
    </article>
  )
}

export default CardResident