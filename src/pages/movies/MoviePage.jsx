import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../../components/ReviewCard";
import FormReview from "../../components/FormReview";

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
      < FormReview />
      </>
     : 
     <div>Loading...</div>
     )
}
  
export default MoviePage;