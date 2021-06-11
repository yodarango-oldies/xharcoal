import arrow from '../../images/arrow.png';

const ArrowButton = ({ clickEvent, nameOfClass }) => {
	return (
		<div className={nameOfClass}>
			<img src={arrow} alt='three d arrow' onClick={clickEvent} />
		</div>
	);
};

export default ArrowButton;
