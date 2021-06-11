const DisclaimerForm = ({ closeDisclaimer, openBuyForm }) => {
	const acceptTermsAndConditions = () => {
		const termsAndConditionsCheckbx = document.querySelector('#accept-terms');
		const nextBtn = document.querySelector('.terms-accepted-btn');
		termsAndConditionsCheckbx.checked
			? (nextBtn.style.display = 'block')
			: (nextBtn.style.display = 'none');
	};

	return (
		<div className='view-asset view-asset-store'>
			<span className='close-X' onClick={closeDisclaimer}>
				X
			</span>
			<div className='spacer'></div>
			<h3 className='std-h3'>What is included</h3>
			<p className='std-p'>
				The Vanilla blog comes ready to use with all the functionalities
				under the item’s description page right out of the box.
				<br />
				<br />
				The user’s one-time payment includes sporadic updates from time to
				time as well as sporadic bug fixes. If at any time any of the
				functionality stops, the user may submit a bug request form through
				the blog explaining the problem. The following features are included
				right after purchase:
				<ul>
					<li>
						Sporadic updates including but limited to new or improved
						features, functionalities, designs, and more.{' '}
					</li>
					<li>Sporadic bug fixes</li>
					<li>100 emails per day</li>
					<li>500MB of storage</li>
				</ul>
			</p>

			<h3 className='std-h3'>What is NOT included</h3>
			<p className='std-p'>
				<ul>
					<li>Continued or scheduled maintenance</li>
					<li>Customer support</li>
					<li> Scaling </li>
					<li>Returns</li>
				</ul>
			</p>

			<h3 className='std-h3'>Hosting and Domain</h3>
			<p className='std-p'>
				Custom domain, and hosting, email services, and database services.
				The user agrees to pay an amount of $25 dollars a year for continued
				hosting and domain ownership after every year of service. Payment
				information is not saved by Xharcoal and this is not a
				subscription-based service. The user will be sent an invoice via
				email by Xharcoal prior to domain and hosting expiration which the
				user is not obligated to pay. Given the circumstance that the user
				opts not to pay the services will be canceled and the blog will not
				longer be available.
			</p>
			<h3 className='std-h3'>Email and Database Services</h3>
			<p className='std-p'>
				The email and database services will be provided by MongoDB and
				Sendgrid. Both are of high reliability and reputation. Xharcoal will
				create both of this accounts for the user and email the login
				credentials which the user is responsible to change upon creation.
				It is the user’s responsibility to upgrade to a greater email or
				database plan if the current plan does not cover the blog’s needs
				(storage and emails sent per day).
			</p>

			<h3 className='std-h3'>Returns and Ongoing Service</h3>
			<p className='std-p'>
				Xharcoal is not subject to provide ongoing service, and has the
				right to discontinue the blog service at any time it resolves.
				However, if service is canceled the user is not obligated to pay for
				any past usage and his/ her database and email services will not be
				canceled. The user will continue to have full ownership of the
				database and email service even if hosting and domain services are
				canceled by Xharcoal. Returns are not provided.
			</p>

			<label className='std-p--important' htmlFor='accept-terms'>
				Accpet Terms and Conditions
				<input
					type='checkbox'
					name='Accept Terms'
					id='accept-terms'
					onClick={acceptTermsAndConditions}
				/>
				<div className='switch'>
					<div className='switch_ball'></div>
				</div>
			</label>
			<div className='infoButton terms-accepted-btn' onClick={openBuyForm}>
				Next
			</div>
		</div>
	);
};

export default DisclaimerForm;
