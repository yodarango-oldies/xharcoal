import React, {useState} from 'react'
import logoOne from '../../images/She-Fit-10.png'
import logoTwo from '../../images/XOL3.png'
import logoThree from '../../images/final logopng.png'
import dataSet from '../misc/dataSet';
import DescriptionIcon from '../../images/description.svg'
import MeaningIcon from '../../images/meaning.svg'

const GraphicDesignCarrousel = () => {

const [logoCard, setLogoCard] = useState(null)

const LogoCardComponenet = ({title, image, description, meaning})=>{
    return(
        <div className = 'view-asset view-asset-logo'>
        <span className = "close-X" onClick = { closeLogoCard }>X</span>
            <img src  = {image} className = 'view-asset_img' alt = 'graphic design'/>
            <h1 className = 'view-asset_title'>{title}</h1>
            <div className = 'desc-meaning-wrapper'>
                <div className = 'icon-wrapper'>
                    <img src = {DescriptionIcon} alt = "logo" />
                    <h6>Description</h6>
                </div>
                <p>{description}</p>
            </div>
            <div className = 'desc-meaning-wrapper'>
                <div className = 'icon-wrapper'>
                    <img src = {MeaningIcon} alt = "logo"/>
                    <h6>Meaning</h6>
                </div>
                <p>{meaning}</p>
            </div>
        </div>
    )
}

const openLogoCard = (e)=>{

    const currLogo = e.currentTarget.dataset.image
    const currTitle = e.currentTarget.dataset.title 
    const currDesc = e.currentTarget.dataset.desc
    const currMeaning = e.currentTarget.dataset.meaning

    setLogoCard(<LogoCardComponenet 
        image = {currLogo} 
        title = {currTitle} 
        description = {currDesc}
        meaning = {currMeaning}
        />)
}

const closeLogoCard = ()=>{
    setLogoCard(null)
}

    return (
        <div className = "carrousel-display">
        {logoCard}
            <img src = {logoOne} alt = "logo" 
                className = "carrousel-display_logo" 
                data-image = {dataSet.One.logo}
                data-title = {dataSet.One.title}
                data-desc = {dataSet.One.description}
                data-meaning = {dataSet.One.meaning}
                onClick = {openLogoCard}
            />
            <div className = "carrousel-display_logo--wrapper">
                <img src = {logoTwo} alt = "logo" 
                    data-image = {dataSet.Two.logo}
                    data-title = {dataSet.Two.title}
                    data-desc = {dataSet.Two.description}
                    data-meaning = {dataSet.Two.meaning}
                    onClick = {openLogoCard}
                />
            </div>
            <img src = {logoThree} alt = "logo" 
                className = "carrousel-display_logo" 
                data-image = {dataSet.Three.logo}
                data-title = {dataSet.Three.title}
                data-desc = {dataSet.Three.description}
                data-meaning = {dataSet.Three.meaning}
                onClick = {openLogoCard}
            />
        </div>
    )
}

export default GraphicDesignCarrousel
