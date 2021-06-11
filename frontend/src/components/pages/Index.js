import '../../Main.scss';
import React, { useState } from 'react';
import Greeting from '../layouts/Greeting';
import ThreeDVector from '../layouts/ThreeDVector';
import HalfScreen from '../layouts/HalfScreen';
import Button from '../buttons/MainButton';
import Wave from '../layouts/Wave';
import Arrow from '../buttons/ArrowButton';
import ContactForm from '../layouts/ContactFrom';
import Reviews from '../layouts/Reviews';

const Index = () => {
	// useEffect(async () => {
	//     console.log('hey')
	//     const data = await fetch('/api');
	//     const res = await data.json()
	//     console.log(res)
	// },[])
	///Open Contact From
	const [openForm, setOpenForm] = useState(null);
	const [background, setBackground] = useState(false);
	const [buttonStyle, setButtonStyle] = useState({
		newClass: 'contactButton',
		text: 'Contact',
	});

	const closeForm = () => {
		setOpenForm(null);
		setBackground(false);
		setButtonStyle({
			newClass: 'contactButton',
			text: 'Contact',
		});
	};

	const openContactForm = () => {
		setOpenForm(ContactForm);
		setBackground(<div onClick={closeForm} className='dark-bkg'></div>);
		setButtonStyle({
			newClass: 'contactButton--open',
			text: 'Contact',
		});
	};

	////Open Reviews
	const openReviews = () => {
		setReviews({
			wrapper: 'wave-wrapper wave-wrapper--open',
			child: 'wave2 wave2--open',
			arrow: 'open-wave-arrow open-wave-arrow--open',
			clickEvent: closeReviews,
			showComments: <Reviews />,
		});
	};
	const closeReviews = () => {
		setReviews({
			wrapper: 'wave-wrapper',
			child: 'wave2',
			arrow: 'open-wave-arrow',
			clickEvent: openReviews,
			showComments: null,
		});
	};

	const [reviews, setReviews] = useState({
		wrapper: 'wave-wrapper',
		child: 'wave2',
		arrow: 'open-wave-arrow',
		clickEvent: openReviews,
		showComments: null,
	});

	return (
		<div className='main-wrapper'>
			{background}
			{openForm}
			<HalfScreen greeting={<Greeting />} description={<ThreeDVector />} />
			<Button
				text='Contact'
				nameOfClass={buttonStyle.newClass}
				cta={openContactForm}
				text={buttonStyle.text}
			/>
			<Arrow nameOfClass={reviews.arrow} clickEvent={reviews.clickEvent} />
			<Wave
				nameOfClass={[reviews.wrapper, reviews.child]}
				showReviews={reviews.showComments}
			/>
		</div>
	);
};

export default Index;
