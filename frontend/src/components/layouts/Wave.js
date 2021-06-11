import React, { useState, useEffect } from 'react';
import MainButton from '../buttons/MainButton';
import LeaveReviewForm from './LeaveReviewForm';

const Wave = ({ nameOfClass, showReviews }) => {
	/////set the states
	const [getUniqueCode, setGetUniqueCode] = useState([]);
	const [openLeaveReview, setOpenLeaveReview] = useState({
		form: null,
		bckg: null,
		nwClass: 'infoButton',
	});
	const [openPasscode, setOpenPasscode] = useState({
		unlockForm: null,
		unlockBkg: null,
	});

	/////Openpasscode Componenet
	const OpenPasscode = ({ wrongCode }) => {
		return (
			<div className='std-form std-form-unlock-review'>
				<input
					placeholder='Enter passcode given by Xharcoal'
					id='input-passcode'
				/>
				<div onClick={openLeaveReviewFrom} className='infoButton'>
					Unlock 🔐{' '}
				</div>
				<p className='std-p--important'>{wrongCode}</p>
			</div>
		);
	};

	/////STEP 1: Open the passcode pop up when clicking Write Review
	const openLeaveReviewFromPasscode = () => {
		setOpenPasscode({
			unlockForm: <OpenPasscode />,
			unlockBkg: (
				<div
					className='dark-bkg'
					onClick={() =>
						setOpenPasscode({ unlockForm: null, unlockBkg: null })
					}
				></div>
			),
		});
	};

	////////STEP 2: fetch data when rendering OpenPasscode component and pass it to the UniqueCode state
	useEffect(() => {
		const getCode = async () => {
			const res = await fetch('/unique-code');
			const data = await res.json();
			setGetUniqueCode(data);
		};
		getCode();
	}, [openPasscode]);

	////////STEP 3: Check if the entered code exists in UniquePasscode state
	const openLeaveReviewFrom = () => {
		const inputCode = document.querySelector('#input-passcode').value;

		const cUC = getUniqueCode.filter((uc) => uc.code === inputCode);

		if (cUC.length > 0) {
			setOpenPasscode({ unlockForm: null, unlockBkg: null });
			setOpenLeaveReview({
				form: <LeaveReviewForm />,
				bckg: (
					<div
						className='dark-bkg'
						onClick={() =>
							setOpenLeaveReview({
								form: null,
								bckg: null,
								nwClass: 'infoButton',
							})
						}
					></div>
				),
				nwClass: 'infoButton infoButton-leave-rvw--open',
			});
		} else {
			setOpenPasscode({
				unlockForm: (
					<OpenPasscode wrongCode='Wrong code, please try again!' />
				),
				unlockBkg: (
					<div
						className='dark-bkg'
						onClick={() =>
							setOpenPasscode({ unlockForm: null, unlockBkg: null })
						}
					></div>
				),
			});
		}
	};

	return (
		<div className={nameOfClass[0]}>
			{openLeaveReview.form}
			{openLeaveReview.bckg}
			{openPasscode.unlockForm}
			{openPasscode.unlockBkg}
			<div className='wave1'></div>
			<div className={nameOfClass[1]}></div>
			<div className='reviewsWrapper'>{showReviews}</div>
			<MainButton
				text='Leave A Review'
				cta={openLeaveReviewFromPasscode}
				nameOfClass={openLeaveReview.nwClass}
			/>
		</div>
	);
};

export default Wave;
