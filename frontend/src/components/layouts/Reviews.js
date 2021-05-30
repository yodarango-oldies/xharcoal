import React, {useState, useEffect} from 'react'
import image from '../../images/Avatar4.png';
const Reviews = () => {

const [reviewData, setReviewData] = useState([]);

useEffect(() => {
    
    async function fetcmyAPI(){
    const resp = await fetch('/reviews');
    const data = await resp.json();

    setReviewData(data)
    }
    fetcmyAPI()
}, [])

    return (
        <React.Fragment>
        {reviewData.map(review => (
            <div className = "reviews-card" key= {review.id}>
            <div className = "image-wrapper">
            <div className = {`reviews-card_image ${review.avatar}`}></div>
            </div>
            <p className = "reviews-card_review-by">Review By</p>
            <p className = "reviews-card_name">{review.name}</p>
            <div className = {`reviews-card_stars ${review.stars}`}> </div>
            <p className = "reviews-card_parragraph">{review.comment}
            </p>
            </div>
        ) )}
        </React.Fragment>
    )
}

export default Reviews
