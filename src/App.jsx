import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'
function App() {
  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    let numberLocation
    if(searchInput === ""){
      numberLocation = Math.ceil(Math.random() * (126 - 1) + 1)
    } else {
      numberLocation = searchInput
    }
    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
    //const location = useFetch(URL)
  }, [searchInput])
  
  const handdleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.search.value)
  }
  console.log(searchInput)

  return (
    <div className="App">
      <header className='App__header'>
        <img className='App__header-img' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/829e53c9-f6cd-4a51-99e4-23bfad4178e0/dbp1ypz-3bb9c9fa-4f68-4a66-a681-a49a58121c69.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyOWU1M2M5LWY2Y2QtNGE1MS05OWU0LTIzYmZhZDQxNzhlMFwvZGJwMXlwei0zYmI5YzlmYS00ZjY4LTRhNjYtYTY4MS1hNDlhNTgxMjFjNjkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VT1K-fe0A8-AQNs5rtAvcUy5tEHPbuHwWTL8z7UlEAA" alt="" />
      </header>
      <form className='formulario' onSubmit={handdleSubmit}>
        <input className='input__search' id="search" type="text" />
        <button className='boton'>Search</button>
      </form>
      <LocationInfo location={location} />
      <div className='container__card contenedor'>
        {
          location?.residents.map(url => (
            <CardResident 
              key={url}
              url={url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
