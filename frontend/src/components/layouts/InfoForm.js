const InfoForm = () => {
    return (
        <form className = "std-form std-form-info">
            <input name = "name" type = "text" maxLength = "30" placeholder = "Name *" required/> 
            <input name = "company" type = "email" maxLength = "50" placeholder = "Email " required/>
            <textarea name = "message" maxLength = "500" placeholder = "What is your question?"></textarea>
            <button type="submit">Send</button>
        </form>
    )
}

export default InfoForm
