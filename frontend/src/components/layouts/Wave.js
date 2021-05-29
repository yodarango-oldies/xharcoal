import React, {useState} from 'react';
import MainButton from "../buttons/MainButton"
import LeaveReviewForm from './LeaveReviewForm';

const Wave = ({nameOfClass, showReviews}) => {

    const OpenPasscode = ()=> {
        return(
            <div className = 'std-form std-form-review' >
            <input placeholder = 'Enter the Passcode' />
            <div onClick = {openLeaveReviewFrom} className = 'infoButton'>Unlock 🔐 </div>
            </div>
        )
    }

    const [openLeaveReview, setOpenLeaveReview] = useState({form: null, bckg: null, nwClass: 'infoButton'})
    const [openPasscode, setOpenPasscode] = useState({unlockForm: null, unlockBkg: null})

    const openLeaveReviewFrom = ()=>{
        setOpenPasscode(null)
       setOpenLeaveReview({
        form: <LeaveReviewForm />, 
        bckg: <div className = 'dark-bkg' onClick = {()=> setOpenLeaveReview({form: null, bckg: null, nwClass: 'infoButton'})}></div>,
        nwClass: 'infoButton infoButton-leave-rvw--open'
    })
    }

    const openLeaveReviewFromPasscode = ()=>{
        setOpenPasscode({
            unlockForm: <OpenPasscode />, 
            unlockBkg: <div className = 'dark-bkg' onClick = {()=> setOpenPasscode({unlockForm: null, unlockBkg: null})}></div>
        })
    }

    return (
        <div className = {nameOfClass[0]}>
            {openLeaveReview.form}
            {openLeaveReview.bckg}
            {openPasscode.unlockForm}
            {openPasscode.unlockBkg}
            <div className= "wave1"></div>
            <div className= {nameOfClass[1]}></div>
            <div className = "reviewsWrapper">
            {showReviews}
            </div>
            <MainButton text = 'Leave A Review' cta = {openLeaveReviewFromPasscode} nameOfClass = {openLeaveReview.nwClass} />
        </div>
    )
}


export default Wave
