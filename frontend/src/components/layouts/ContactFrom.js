const ContactFrom = () => {
    return (
        <form method= 'POST' action = '/contact' className = "std-form">
            <input name = "name" type = "text" maxLength = "30" placeholder = "Name *" required/> 
            <input name = "company" type = "text" maxLength = "100" placeholder = "Company Name " /> 
            <input name = "phone" type = "tel" maxLength = "14" placeholder = "Phone Number * " /> 
            <input name = "email" type = "email" maxLength = "50" placeholder = "Email " required/> 
            <select name ='contactVia'>
            <option value = 'via Text'>Text</option>
            <option value = 'via Email' >Email</option>
            </select>
            <textarea name = "message" maxLength = "500" placeholder = "Enter your message..."></textarea>
            <button type="submit">Send</button>
        </form>
    )
}

export default ContactFrom
