import React from 'react'
import image from '../../images/Avatar4.png'

const Reviews = () => {

    const reviews  = [];

    for (let i = 0; i < 10; i++){
        reviews.push(
        <div className = "reviews-card" key= {i}>
        <div className = "image-wrapper">
        <img className = "reviews-card_image" src= {image} alt="avatar"/>
        </div>
        <p className = "reviews-card_review-by">Review BY</p>
        <p className = "reviews-card_name">Some Name</p>
        <div className = "reviews-card_stars"></div>
        <p className = "reviews-card_parragraph">lorem80 fvfdvfdv
        kfvfdbvskvdvdsvbd dfkjnvfdb sdlnvdsf sdfgjndslf sldfnds
        dsfnd dsflnds lsdnfd ldsgnfds arn prejgr preg parj aprjg aoeiwhg
        </p>
        </div>
        )
    }

    return (
        <React.Fragment>{reviews}</React.Fragment>
    )
}

export default Reviews
