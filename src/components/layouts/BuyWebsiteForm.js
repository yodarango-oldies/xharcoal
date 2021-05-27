const BuyWebsiteForm = ({closeBuyForm, openQuestionsForm}) => {

    // const Colorpicker = () =>{
    //     return 
    // }

    return (
        <div className = 'view-asset'>
            <span className = "close-X" onClick = { closeBuyForm }>X</span>
            <div className = 'buy-from std-form'>
                <input name = "name" type = "text" maxLength = "30" placeholder = "Name *" required/> 
                <input name = "phone" type = "tel" maxLength = "14" placeholder = "Phone Number * " required/> 
                <input name = "email" type = "email" maxLength = "50" placeholder = "Email *" required/> 
                <p className = 'std-p std-p--buy'>Please enter your chosen domain for your website as well as 2 additionals in order of preference in case your chosen domain is not available </p>
                <textarea placeholder = 'Example.com, Exampletwo.com, Examplethree.com'></textarea>
                <div className = 'infoButton confirm-order-btn'>Confirm Order</div>
                <div className = 'infoButton' onClick = { ()=> {closeBuyForm(); openQuestionsForm();} }>Have Questions?</div>
            </div>
            
        </div>
    )
}

export default BuyWebsiteForm
