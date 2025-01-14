import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../../components/ReviewCard";

function MoviePage() {

    // recuperare l'id del libro dal path della rotta

    const [movie, setMovie] = useState(null)

    const { id } = useParams()

    function fetchMovie() {

       axios.get(`http://localhost:3000/api/movies/${id}`)
        //axios.get(`${import.meta.env.VITE_API_URL}/movies/${id}`)
     
      .then(res => {
        setMovie(res.data)
      })
      .catch(err => {
        console.error(err)
        //  qui ci sarà bisogno di un redirect alla pagina 404
      })
    }

    useEffect(() => {
      fetchMovie()
    },[id])
  
    return (
    movie ? <>
      <section>
        <div className="container">
          <h1>{movie.title}</h1>
          <div>
            <img className='width-img' src={movie.image} alt="" />
          </div>
          <div>
            {movie.director}
          </div>
          <p>
            {movie.abstract}
          </p>
          {/* media valutazioni con stelline */}
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Tutte le recensioni</h2>
        </div>
        <div className="container">
        {movie.reviews.length ? 
          <ul className="container reviews-grid">
            {movie.reviews.map(review => (
              <ReviewCard review={review} key={review.id} />
            )) }
          </ul>:
        <div>Nessuna recensione</div>
        }
        </div>
      </section>
      {/* form per nuova recensione */}
      <section>
        <div className="container" >
            <div className="form-section">

              <strong className="title-form">Aggiungi una recensione</strong>
              <form action="" className="form-rating">
                  <div className="form-box">  
                    <label htmlFor="name">Nome</label>
                    <input type="text" placeholder="nome" name="name" id="name"/>
                  </div>
                  <div className="form-box">
                    <label htmlFor="text">Descrizione</label>
                    <textarea name="text" id="text" rows="4" placeholder="Scrivi la tua recensione"></textarea>
                  </div>
                  <div className="form-box">
                    <label htmlFor="vote">Voto</label>
                      <select name="vote" id="vote">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                  </div>

                  <button className="submit-btn">Invia</button>
              </form>
            </div>
          
        </div>
        
      </section>
      </>
     : 
     <div>Loading...</div>
     )
}
  
export default MoviePage;