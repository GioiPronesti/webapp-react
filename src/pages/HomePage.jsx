import { useEffect } from "react"
import { useState } from "react"
import  axios from "axios"
import MovieCard from "../components/MovieCard"

function HomePage() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")


  function fetchMovies(){

      axios.get("http://localhost:3000/api/movies",{
        params: {
          search: search
        }
      })
      .then(response => {
        console.log(response)
        setMovies(response.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  function searchMovies(e){
    e.preventDefault()

    fetchMovies()
  }

  

  useEffect(() => {
    fetchMovies()  
  },[])
    
  return <>
    <section>
      <div className="container ">
        <div>
          <h1 className='heading'>Bool Movies</h1>
          <h2 className='text-lg'>La galleria dei film popolari in boolean!</h2>
        </div>
        <form onSubmit={searchMovies}>
          <input className="search-input" type="text"
            placeholder="cerca il film" value={search}
            onChange={(e) => {setSearch(e.target.value)}}
          />
          <button className="search-film">Cerca</button>
        </form>
      </div>
    </section>
    <section>
      <div className="container">
        {movies.length ? <ul className="container-grid">
            {
              movies.map(movie => {
                return <li key={movie.id}>
                  <MovieCard movie={movie}></MovieCard>
                </li>
              })
            }
          </ul> : 
          <div className='text-center'>
            Nessun risultato
          </div>
          }
        </div>
    </section>
  </>
}

export default HomePage