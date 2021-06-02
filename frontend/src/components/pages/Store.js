import React, {useState} from 'react'
import MainButton from "../buttons/MainButton";
import MoreInfoBlock from '../layouts/MoreInfoBlock';
import StoreCarrousel from '../layouts/StoreCarrousel';
import BuyWebsiteForm from '../layouts/BuyWebsiteForm';
import QuestionsForm from '../layouts/QuestionsForm';
import DisclaimerForm from '../layouts/DisclaimerForm';

const Store = () => {

    //===========open more info popup=============

    const [openFormAbt, setOpenForm] = useState(null);
    const [backgroundAbt, setBackground] = useState(false)
    const [buttonStyleAbt, setButtonStyle] = useState({
        newClass: 'infoButton',
        text: 'More Info'
    })

    const closeForm = ()=>{
        setOpenForm(null)
        setBackground(false)
        setButtonStyle({
            newClass: 'infoButton',
            text: 'More Info'})
    }

    const openContactForm = ()=>{

        setOpenForm(<MoreInfoBlock closeForm = {closeForm}/>)
        setBackground(<div onClick = {closeForm} className = 'dark-bkg'></div>)
        setButtonStyle({
            newClass: 'infoButton--open',
            text: 'More Info'})
    } 

    ///////============ open disclaimer pop up ===============
    const [disclaimer, setDisclaimer] = useState(null);

    const openDisclaimer = ()=>{
        setDisclaimer(<DisclaimerForm closeDisclaimer = {closeDisclaimer} openBuyForm = {openBuyForm}/>)
    }

    const closeDisclaimer = ()=>{
        setDisclaimer(null)
    }
    ///////============= open buy pop up ============

    const [buyForm, setBuyForm] = useState(null);

    const openBuyForm = ()=>{
        setDisclaimer(null)
        setBuyForm(<BuyWebsiteForm closeBuyForm = {closeBuyForm} openQuestionsForm = {openQuestionsForm}/>)
    }

    const closeBuyForm = ()=> {
        setBuyForm(null)
    }

    /////============= open questions popup ===========

    const [openQuestions, setOpenQuestions] = useState(null);

    const closeQuestionsForm = ()=> {
        setOpenQuestions(null)
    }

    const openQuestionsForm = ()=>{
        setOpenQuestions(<QuestionsForm closeBuyForm ={closeQuestionsForm} />)
    }

    return (
        <div>
            {buyForm}
            {backgroundAbt}
            {openFormAbt}
            {openQuestions}
            {disclaimer}
            <div className = "left-greeting left-greeting-store">READY. SET. WWW!</div>
            <div className = 'pay-with-paypal'>Pay securely with paypal</div>
            <div className = 'pay-with-paypal pay-with-paypal-img'></div>
            <StoreCarrousel openDisclaimer = {openDisclaimer} />
            <MainButton text = {buttonStyleAbt.text} nameOfClass = {buttonStyleAbt.newClass} cta = {openContactForm}/>
        </div>
    )
}

export default Store
