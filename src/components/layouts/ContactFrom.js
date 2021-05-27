const ContactFrom = () => {
    return (
        <form className = "std-form">
            <input name = "name" type = "text" maxLength = "30" placeholder = "Name *" required/> 
            <input name = "company" type = "text" maxLength = "100" placeholder = "Company Name " /> 
            <input name = "company" type = "tel" maxLength = "14" placeholder = "Phone Number * " /> 
            <input name = "company" type = "email" maxLength = "50" placeholder = "Email " required/> 
            <select>
            <option>Text</option>
            <option>Email</option>
            </select>
            <textarea name = "message" maxLength = "500" placeholder = "Enter your message..."></textarea>
            <button type="submit">Send</button>
        </form>
    )
}

export default ContactFrom
