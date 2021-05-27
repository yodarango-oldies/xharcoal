const QuestionsForm = ({closeBuyForm, openQuestionsForm}) => {
    return (
        <div className = 'view-asset view-asset-questions'>
            <span className = "close-X" onClick = { closeBuyForm }>X</span>
            <div className = 'questions-from std-form'>
                <input name = "name" type = "text" maxLength = "30" placeholder = "Name *" required/> 
                <input name = "phone" type = "tel" maxLength = "14" placeholder = "Phone Number "/> 
                <input name = "email" type = "email" maxLength = "50" placeholder = "Email *" required/> 
                <textarea placeholder = 'Example.com, Exampletwo.com, Examplethree.com'></textarea>
                <div className = 'infoButton confirm-order-btn'>Send</div>
            </div>
            
        </div>
    )
}

export default QuestionsForm
