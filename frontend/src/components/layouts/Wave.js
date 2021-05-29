const Wave = ({nameOfClass, showReviews}) => {
    return (
        <div className = {nameOfClass[0]}>
            <div className= "wave1"></div>
            <div className= {nameOfClass[1]}></div>
            <div className = "reviewsWrapper">
            {showReviews}
            </div>
        </div>
    )
}


export default Wave
