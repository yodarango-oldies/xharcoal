import React, {useState} from 'react'
import Button from '../buttons/MainButton';
import HalfScreen from '../layouts/HalfScreen';
import AboutCard from '../layouts/AboutCard';
import ContactForm from '../layouts/ContactFrom';

const About = () => {

    const [openForm, setOpenForm] = useState(null);
    const [background, setBackground] = useState(false)
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

    const openContactFormAbt = ()=>{

        setOpenForm(ContactForm)
        setBackground(<div onClick = {closeForm} className = 'dark-bkg'></div>)
        setButtonStyle({
            newClass: ' contactButton contactButton-about--open',
            text: 'Contact'})
    }

    return (
        <div className = "main-wrapper">
        {background}
        {openForm}
        <HalfScreen 
        greeting = {<h1 className="left-greeting left-greeting-about">
        ABOUT<br />
        XHARCOAL
        </h1>}
        description = { <AboutCard />}
        />
        <Button
        text= "Contact" 
        nameOfClass = {buttonStyleAbt.newClass}
        cta = {openContactFormAbt}
        text = {buttonStyleAbt.text}/>
        <div class= 'std-spacer'></div>
        </div>
    )
}

export default About
