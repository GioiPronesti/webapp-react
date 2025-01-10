import { Link } from 'react-router-dom'

function MovieCard({ movie }) {

  const { id, title, director, image, abstract, avg_vote } = movie;

  return (
    <article className='card'>
      <img src={image} alt="" className='poster-img' />
      <div className='card-info'>
        <h3 className='title'>
          {title}
        </h3>
        <p className='author'>
          {director}
        </p>
        <p className='short'>
          {abstract}
        </p>
        <div className='ratings-vote'>
        {avg_vote}
        </div>
        <Link className='btn-for-details' to={`/movies/${id}`}>Read more</Link>
      </div>
    </article>
  )
}

export default MovieCard;