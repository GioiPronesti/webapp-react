import { useEffect } from "react"
import { useState } from "react"
import  axios from "axios"
import MovieCard from "../components/MovieCard"

function HomePage() {

  const [movies, setMovies] = useState([])

  function fetchMovies(){

      axios.get("http://localhost:3000/api/movies")
      .then(response => {
        console.log(response)
        setMovies(response.data)
      })
      .catch(err => {
        console.error(err)
      })
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