const BuyWebsiteForm = ({closeBuyForm, openQuestionsForm}) => {

   const colorChange = (e)=>{
       e.currentTarget.style.backgroundColor = e.currentTarget.value
   }

    return (
        <div className = 'view-asset'>
            <span className = "close-X" onClick = { closeBuyForm }>X</span>
            <div className = 'buy-from'>
            <p className = 'std-p--important'>All fileds are required</p>
            <label>Contact Information 📱</label>
                <input name = "name" type = "text" maxLength = "30" placeholder = "Name" required/> 
                <input name = "phone" type = "tel" maxLength = "14" placeholder = "Phone Number" required/> 
                <input name = "email" type = "email" maxLength = "50" placeholder = "Email" required/> 
                <label>Blog Theme Colors 🎨 </label>
                <p className = 'std-p std-p--buy'>Enter your colors in hex values, for example: #24f054 <br />
                <i>Don't know your colors' hex values? </i> <br />
                <b><i><a href = "https://www.google.com/search?q=color+picker" target="_blank" rel="noopener noreferrer">Try Google's color picker</a></i></b>
                </p>
                <input type = 'text' placeholder = 'color #1' onChange = {colorChange} required/>
                <input type = 'text' placeholder = 'color #2' onChange = {colorChange} required/>
                <input type = 'text' placeholder = 'color #3' onChange = {colorChange} required/>
                <p className = 'std-p std-p--buy'>Please enter your chosen domain for your website as well as 2 additionals in order of preference in case your chosen domain is not available </p>
                <textarea placeholder = 'Example.com, Exampletwo.com, Examplethree.com'></textarea>
                <p  className = 'std-p--price'>Total Price: $99.99</p>
                <div className = 'infoButton confirm-order-btn'>Proceed to Pay</div>
                <div className = 'infoButton' onClick = { ()=> {closeBuyForm(); openQuestionsForm();} }>Have Questions?</div>
            </div>
            
        </div>
    )
}

export default BuyWebsiteForm
