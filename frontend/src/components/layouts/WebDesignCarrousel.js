import React, {useState} from 'react';
import dataSet from '../misc/dataSetTwo';
import Design from '../../images/devices.svg';
import Functionality from '../../images/gear.svg';
import Seo from '../../images/graph.svg';
import XolProperties from '../../images/xolproperties.com.png'
import NSWhitley from '../../images/nswhitley.com.png'
import Savvysaute from '../../images/savvysaute.com.png';



const WebDesignCarrousel = () => {

    const [webCard, setWebCard] = useState(null);

    const Parragraph = ({description})=>{
        return (
            <p>
            {description}
            </p>
        )
    }
    
    const LogoCardComponenet = ({title, imageOne, imageTwo, description, stepOne, stepTwo, stepThree, link})=>{
        return(
            <div className = 'view-asset view-asset-website'>
            <span className = "close-X" onClick = { closeWebCard }>X</span>
                <img src  = {imageOne} className = 'view-asset_img-one' alt='web design'/>
                <div className = 'view-asset_title-desc'>
                    <a href={`http://${link}`} className = 'view-asset_title'>{title}</a>
                    <Parragraph description = {description}/>
                </div>
                <div className = 'view-asset_steps'>
                    <div className = 'view-asset_steps-wrapper' >
                        <img src={Design} alt="icon" />
                        <span className = 'step steps_one'>1</span>
                        <p className = 'steps_description'>{stepOne}</p>
                    </div>
                    <div className = 'view-asset_steps-wrapper'>
                        <img src= {Functionality} alt="icon" />  
                        <span className = 'step steps_two' >2</span> 
                        <p className = 'steps_description'>{stepTwo}</p>
                    </div>
                    <div className = 'view-asset_steps-wrapper'>
                        <img src= {Seo} alt="icon" />
                        <span className = 'step steps_three' >3</span>
                        <p className = 'steps_description'>{stepThree}</p>
                    </div>
                </div>
               <img src= {imageTwo} alt="icon" className = 'view-asset_img-two' />
            </div>
        )
    }
    
    const openWebCard = (e)=>{
    
        const currImageOne = e.currentTarget.dataset.imageone
        const currImageTwo = e.currentTarget.dataset.imagetwo
        const currTitle = e.currentTarget.dataset.title 
        const currDesc = e.currentTarget.dataset.desc
        const currStepOne = e.currentTarget.dataset.stepone
        const currStepTwo = e.currentTarget.dataset.steptwo
        const currStepThree = e.currentTarget.dataset.stepthree
        const currLink = e.currentTarget.dataset.link
    
        setWebCard(<LogoCardComponenet 
            title = {currTitle} 
            imageOne = {currImageOne} 
            imageTwo = {currImageTwo}
            description = {currDesc}
            stepOne = {currStepOne}
            stepTwo = {currStepTwo}
            stepThree = {currStepThree}
            link = {currLink}
            />)
    }
    
    const closeWebCard = ()=>{
        setWebCard(null)
    }

    return (
        <div className = "carrousel-display">
            {webCard}

            <div className="web-card"
            onClick = {openWebCard}
            data-imageone = {dataSet.One.imageOne}
            data-imagetwo = {dataSet.One.imageTwo}
            data-title = {dataSet.One.title}
            data-desc = {dataSet.One.description}
            data-stepone = {dataSet.One.stepOne}
            data-steptwo = {dataSet.One.stepTwo}
            data-stepthree = {dataSet.One.stepThree}
            data-link = {dataSet.One.link}
            >
                <img src={ XolProperties } alt="web design" className="web-card_img" />
                <div className="web-card_desc-title">
                    <h2 className="desc-title_title">{dataSet.One.title}</h2>
                    <p className="desc-title_desc">{dataSet.One.description}</p>
                </div>
            </div>


            <div className="web-card"
            onClick = {openWebCard}
            data-imageone = {dataSet.Two.imageOne}
            data-imagetwo = {dataSet.Two.imageTwo}
            data-title = {dataSet.Two.title}
            data-desc = {dataSet.Two.description}
            data-stepone = {dataSet.Two.stepOne}
            data-steptwo = {dataSet.Two.stepTwo}
            data-stepthree = {dataSet.Two.stepThree}
            data-link = {dataSet.Two.link}
            >
                <img src={ NSWhitley } alt="web design" className="web-card_img" />
                <div className="web-card_desc-title">
                    <h2 className="desc-title_title">{dataSet.Two.title}</h2>
                    <p className="desc-title_desc">{dataSet.Two.description}</p>
                </div>
            </div>

            <div className="web-card"
            onClick = {openWebCard}
            data-imageone = {dataSet.Three.imageOne}
            data-imagetwo = {dataSet.Three.imageTwo}
            data-title = {dataSet.Three.title}
            data-desc = {dataSet.Three.description}
            data-stepone = {dataSet.Three.stepOne}
            data-steptwo = {dataSet.Three.stepTwo}
            data-stepthree = {dataSet.Three.stepThree}
            data-link = {dataSet.Three.link}
            >
                <img src={ Savvysaute } alt="web design" className="web-card_img" />
                <div className="web-card_desc-title">
                    <h2 className="desc-title_title">{dataSet.Three.title}</h2>
                    <p className="desc-title_desc">{dataSet.Three.description}</p>
                </div>
            </div>
        </div>
    )
}

export default WebDesignCarrousel
