import React, { useState } from 'react';
import ContactForm from '../layouts/ContactFrom';
import ArrowButton from '../buttons/ArrowButton';
import MainButton from '../buttons/MainButton';
import WebDesignCarrousel from '../layouts/WebDesignCarrousel';

const WebDesign = () => {
	const [openFormAbt, setOpenForm] = useState(null);
	const [backgroundAbt, setBackground] = useState(false);
	const [buttonStyleAbt, setButtonStyle] = useState({
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
			text: 'Close',
		});
	};

	return (
		<div>
			{backgroundAbt}
			{openFormAbt}
			<div className='left-greeting'>BUILDING WONDERS NOT WEBSITES</div>
			<WebDesignCarrousel />
			<p className='std-link'>Graphic Design</p>
			<a
				href='/portfolio/graphic-design'
				className='open-wave-arrow-portfolio'
			>
				<ArrowButton />
			</a>
			<MainButton
				text={buttonStyleAbt.text}
				nameOfClass={buttonStyleAbt.newClass}
				cta={openContactForm}
			/>
		</div>
	);
};

export default WebDesign;
