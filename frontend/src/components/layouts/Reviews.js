import React, {useState, useEffect} from 'react'
import image from '../../images/Avatar4.png'

const Reviews = () => {


    // const reviews  = [];

    // for (let i = 0; i < reviewData.length; i++){
    //     reviews.push(
        // <div className = "reviews-card" key= {reviewData.id}>
        // <div className = "image-wrapper">
        // <img className = "reviews-card_image" src= {image} alt="avatar"/>
        // </div>
        // <p className = "reviews-card_review-by">Review BY</p>
        // <p className = "reviews-card_name">{reviewData.name}</p>
        // <div className = "reviews-card_stars"></div>
        // <p className = "reviews-card_parragraph">{reviewData.comment}}
        // </p>
        // </div>
    //     )
    // }

const [reviewData, setReviewData] = useState([]);

useEffect(async () => {
    const resp = await fetch('/reviews');
    const data = await resp.json();

    setReviewData(data)

    console.log(data)
}, [])

    return (
        <React.Fragment>
        {reviewData.map(review => (
            <div className = "reviews-card" key= {review.id}>
            <div className = "image-wrapper">
            <img className = "reviews-card_image" src= {image} alt="avatar"/>
            </div>
            <p className = "reviews-card_review-by">Review BY</p>
            <p className = "reviews-card_name">{review.name}</p>
            <div className = "reviews-card_stars"></div>
            <p className = "reviews-card_parragraph">{review.comment}
            </p>
            </div>
        ) )}
        </React.Fragment>
    )
}

export default Reviews
