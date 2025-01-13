/* eslint-disable react/prop-types */

function ReviewCard({ review }){
  
    const { name, text, vote} = review

    return (
        <div className="border-review">
            <p className="text-small">{text}</p>
            <div className="flex-vote">
                <strong>Voto</strong>
                <div className="vote-rate">{vote}</div>
            </div>
            <div className="author-rating">
                By {name}
            </div>
        </div>
    )
    
}

export default ReviewCard