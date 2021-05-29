const DisclaimerForm = ({closeDisclaimer, openBuyForm}) => {

    const acceptTermsAndConditions = ()=>{
        const termsAndConditionsCheckbx =  document.querySelector('#accept-terms');
        const nextBtn = document.querySelector('.terms-accepted-btn');
        termsAndConditionsCheckbx.checked ? nextBtn.style.display = 'block' : nextBtn.style.display = 'none';

    } 

    return (
        <div className = 'view-asset view-asset-store'>
        <span className = "close-X" onClick = { closeDisclaimer }>X</span>
        <p className = 'std-p'>
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <label className = 'std-p--important' htmlFor="accept-terms">
        Accpet Terms and Conditions
        <input type="checkbox" name="Accept Terms" id="accept-terms" onClick = {acceptTermsAndConditions} />
        <div className="switch"><div className="switch_ball"></div></div>
        </label>
        <div className="infoButton terms-accepted-btn"
        onClick = {openBuyForm} >Next</div>
        </div>
    )
}

export default DisclaimerForm
