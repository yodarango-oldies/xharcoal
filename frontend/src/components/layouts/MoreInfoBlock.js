import stepOne from '../../images/store-one.svg';
import stepTwo from '../../images/store-two.svg';
import stepThree from '../../images/store-three.svg';
import stepFour from '../../images/store-four.svg';

const MoreInfoBlock = ({ closeForm }) => {

    return (
        <div className = 'view-asset view-asset-store'>
            <span className = "close-X" onClick = { closeForm }>X</span>
            <h2 className = 'std-h2'>HOW TO GET YOUR OWN WEBSITE?</h2>
            <p className = 'std-p'>Getting a fully customed webiste has never been easier (nor cheaper 😉). <br /> Simply follow the steps below to make one yours!</p>
            <div className = 'store-steps-wrapper'>
                <div className = 'store-steps'>
                    <span>1</span>
                    <p>Select your website</p>
                    <img src = {stepOne} />
                </div>
                <div className = 'store-steps'>
                    <span>2</span>
                    <p>Fillout Customization</p>
                    <img src = {stepTwo}/>
                </div>
                <div className = 'store-steps'>
                    <span>3</span>
                    <p>Submit your payment</p>
                    <img src = {stepThree} />
                </div>
                <div className = 'store-steps'>
                    <span>4</span>
                    <p>Wait for an Email when it's ready</p>
                    <img src= {stepFour} />
                </div>
            </div>
        </div>
    )
}

export default MoreInfoBlock
