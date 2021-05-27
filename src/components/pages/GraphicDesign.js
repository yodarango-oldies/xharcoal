import React, {useState} from 'react'
import ArrowButton from "../buttons/ArrowButton"
import MainButton from "../buttons/MainButton"
import GraphicDesignCarrousel from "../layouts/GraphicDesignCarrousel"
import ContactForm from '../layouts/ContactFrom'


const GraphicDesign = () => {
    ///Open Contact From
    const [openFormAbt, setOpenForm] = useState(null);
    const [backgroundAbt, setBackground] = useState(false)
    const [buttonStyleAbt, setButtonStyle] = useState({
        newClass: 'contactButton',
        text: 'Contact'
    })

    const closeForm = ()=>{
        setOpenForm(null)
        setBackground(false)
        setButtonStyle({
            newClass: 'contactButton',
            text: 'Contact'})
    }

    const openContactForm = ()=>{

        setOpenForm(ContactForm)
        setBackground(<div onClick = {closeForm} className = 'dark-bkg'></div>)
        setButtonStyle({
            newClass: 'contactButton--open',
            text: 'Close'})
    }

    return (
        <div className = "main-wrapper">
            {backgroundAbt}
            {openFormAbt}
            <div className = "left-greeting">BUILDING LEGACIES NOT LOGOS</div>
            <GraphicDesignCarrousel />
            <p className = "std-link">Web Design</p>
            <a href="/portfolio/web-design" className = "open-wave-arrow-portfolio">
            <ArrowButton />
            </a>
            <MainButton text = {buttonStyleAbt.text} nameOfClass = {buttonStyleAbt.newClass} cta = {openContactForm}/>
        </div>
    )
}

export default GraphicDesign
