const LeaveReviewForm = () => {
    return (
        <form method= 'POST' action = '/reviews' className = "std-form std-form-review">
            <input name = "name" type = "text" maxLength = "30" placeholder = "Name *" required/> 
            <input name = "company" type = "email" maxLength = "50" placeholder = "Email "/>
           
            <p className = 'std-p'>Rating</p>
            <div className = 'starsWrapper'>
                <label><input type = 'radio' name= 'stars' value = "oneStars" required /> <div className = 'oneStars'></div></label>
                <label><input type = 'radio' name= 'stars' value = "oneHalfStars" required /> <div className = 'oneHalfStars'></div></label>
                <label><input type = 'radio' name= 'stars' value ="twoStars" required /> <div className = 'twoStars'></div></label>
                <label><input type = 'radio' name= 'stars' value ="twoHalfStars" required /> <div className = 'twoHalfStars'></div></label>
                <label><input type = 'radio' name= 'stars' value ="threeStars" required /> <div className = 'threeStars'></div></label>
                <label><input type = 'radio' name= 'stars' value ="threeHalfStars" required /> <div className = 'threeHalfStars'></div></label>
                <label><input type = 'radio' name= 'stars' value ="fourStars" required /> <div className = 'fourStars'></div></label>
                <label><input type = 'radio' name= 'stars' value ="fourHalfStars" required /> <div className = 'fourHalfStars'></div></label>
                <label><input type = 'radio' name= 'stars' value ="fiveStars" required /> <div className = 'fiveStars'></div></label>
            </div>

            <p className = 'std-p'>select Avatar</p>
            <div className = 'avatarWrapper'>
                <label><input type = 'radio' name= 'avatar' value = "avatarOne" required /> <div className = 'avatarOne'></div></label>
                <label><input type = 'radio' name= 'avatar' value = "avatarTwo" required /> <div className = 'avatarTwo'></div></label>
                <label><input type = 'radio' name= 'avatar' value ="avatarThree" required /> <div className = 'avatarThree'></div></label>
                <label><input type = 'radio' name= 'avatar' value ="avatarFour" required /> <div className = 'avatarFour'></div></label>
                <label><input type = 'radio' name= 'avatar' value ="avatarFive" required /> <div className = 'avatarFive'></div></label>
                <label><input type = 'radio' name= 'avatar' value ="avatarSix" required /> <div className = 'avatarSix'></div></label>
                <label><input type = 'radio' name= 'avatar' value ="avatarSeven" required /> <div className = 'avatarSeven'></div></label>
                <label><input type = 'radio' name= 'avatar' value ="avatarEight" required /> <div className = 'avatarEight'></div></label>
                <label><input type = 'radio' name= 'avatar' value ="avatarNine" required /> <div className = 'avatarNine'></div></label>
                <label><input type = 'radio' name= 'avatar' value ="avatarTen" required /> <div className = 'avatarTen'></div></label>
            </div>

            <textarea name = "comment" maxLength = "140" placeholder = "write your review..." required ></textarea>
            <button type="submit">Send</button>
        </form>
    )
}

export default LeaveReviewForm
