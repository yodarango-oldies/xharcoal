const LeaveReviewForm = () => {
    return (
        <form method= 'POST' action = '/reviews' className = "std-form std-form-review">
            <input name = "name" type = "text" maxLength = "30" placeholder = "Name *" required/> 
            <input name = "company" type = "email" maxLength = "50" placeholder = "Email "/>
            <div className = 'starsWrapper'>
            <label><input type = 'radio' name= 'stars' value = "oneStars" /> <div className = 'oneStars'></div></label>
            <label><input type = 'radio' name= 'stars' value = "oneHalfStars" /> <div className = 'oneHalfStars'></div></label>
            <label><input type = 'radio' name= 'stars' value ="twoStars" /> <div className = 'twoStars'></div></label>
            <label><input type = 'radio' name= 'stars' value ="twoHalfStars" /> <div className = 'twoHalfStars'></div></label>
            <label><input type = 'radio' name= 'stars' value ="threeStars" /> <div className = 'threeStars'></div></label>
            <label><input type = 'radio' name= 'stars' value ="threeHalfStars"/> <div className = 'threeHalfStars'></div></label>
            <label><input type = 'radio' name= 'stars' value ="fourStars" /> <div className = 'fourStars'></div></label>
            <label><input type = 'radio' name= 'stars' value ="fourHalfStars"/ > <div className = 'fourHalfStars'></div></label>
            <label><input type = 'radio' name= 'stars' value ="fiveStars" /> <div className = 'fiveStars'></div></label>
            </div>
            
            <textarea name = "comment" maxLength = "140" placeholder = "write your review..."></textarea>
            <button type="submit">Send</button>
        </form>
    )
}

export default LeaveReviewForm
