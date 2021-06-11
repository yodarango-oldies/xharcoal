import React, { useState } from 'react';

const BuyWebsiteForm = ({ closeBuyForm, openQuestionsForm }) => {
	const colorChange = (e) => {
		e.currentTarget.style.backgroundColor = e.currentTarget.value;
	};

	return (
		<div className='view-asset'>
			<span className='close-X' onClick={closeBuyForm}>
				X
			</span>
			<form method='POST' action='/new-order' className='buy-from'>
				<p className='std-p--important'>All fileds are required</p>
				<label>Contact Information 📱</label>
				<input
					name='name'
					type='text'
					maxLength='30'
					placeholder='Name'
					className='inputRequired'
					required
				/>
				<input
					name='phone'
					type='tel'
					maxLength='14'
					placeholder='Phone Number'
					className='inputRequired'
					required
				/>
				<input
					name='email'
					type='email'
					maxLength='50'
					placeholder='Email'
					className='inputRequired'
					required
				/>
				<label>Blog Theme Colors 🎨 </label>
				<p className='std-p std-p--buy'>
					Enter your colors in hex values, for example: #24f054 <br />
					<i>Don't know your colors' hex values? </i> <br />
					<b>
						<i>
							<a
								href='https://www.google.com/search?q=color+picker'
								target='_blank'
								rel='noopener noreferrer'
							>
								Try Google's color picker
							</a>
						</i>
					</b>
				</p>
				<input
					name='colorOne'
					type='text'
					placeholder='color #1'
					onChange={colorChange}
					className='inputRequired'
					required
				/>
				<input
					name='colorTwo'
					type='text'
					placeholder='color #2'
					onChange={colorChange}
					className='inputRequired'
					required
				/>
				<input
					name='colorThree'
					type='text'
					placeholder='color #3'
					onChange={colorChange}
					className='inputRequired'
					required
				/>
				<p className='std-p std-p--buy'>
					Please enter your chosen domain for your website as well as 2
					additionals in order of preference in case your chosen domain is
					not available{' '}
				</p>
				<input
					name='domainOne'
					type='text'
					placeholder='Preferred Domain'
					className='inputRequired'
					required
				/>
				<input
					name='domainTwo'
					type='text'
					placeholder='Second Preferred Domain'
					className='inputRequired'
					required
				/>
				<input
					name='domainThree'
					type='text'
					placeholder='Third Preferred Domain'
					className='inputRequired'
					required
				/>
				<p className='std-p--price'>Total Price: $99.99</p>
				<button className='infoButton confirm-order-btn' type='submit'>
					Proceed to Pay
				</button>
				<div
					className='infoButton'
					onClick={() => {
						closeBuyForm();
						openQuestionsForm();
					}}
				>
					Have Questions?
				</div>
			</form>
		</div>
	);
};

export default BuyWebsiteForm;
