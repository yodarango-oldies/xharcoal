const QuestionsForm = ({ closeBuyForm }) => {
	return (
		<div className='view-asset view-asset-questions'>
			<span className='close-X' onClick={closeBuyForm}>
				X
			</span>
			<form method='POST' action='/question' className='questions-from'>
				<input
					name='name'
					type='text'
					maxLength='30'
					placeholder='Name *'
					required
				/>
				<input
					name='phone'
					type='tel'
					maxLength='14'
					placeholder='Phone Number '
				/>
				<input
					name='email'
					type='email'
					maxLength='50'
					placeholder='Email *'
					required
				/>
				<textarea name='message' placeholder='How can I help? '></textarea>
				<button type='submit' className='infoButton confirm-order-btn'>
					Send
				</button>
			</form>
		</div>
	);
};

export default QuestionsForm;
