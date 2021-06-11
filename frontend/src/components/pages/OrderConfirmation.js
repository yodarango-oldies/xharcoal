import { useHistory } from 'react-router-dom';

const OrderConfirmation = () => {
	let history = useHistory();

	const goHome = () => {
		history.push('/');
	};
	return (
		<div className='checkout-button-wrapper'>
			<h1 className='left-greeting'>THANK YOU FOR YOUR ORDER </h1>
			<div className='checkout-button-wrapper_img checkout-button-wrapper_img--confirmation'></div>
			<p className='std-p std-p--light'>
				Thank you for placing your order, you will be receiving an email
				with all the details once your website is ready.
				<br />
				<br />
				In the mean time, if you have any questions, do not doubt about
				contacting us! 😊
			</p>
			<button className='infoButton' onClick={goHome}>
				Home
			</button>
		</div>
	);
};

export default OrderConfirmation;
