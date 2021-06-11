const MainButton = ({ text, nameOfClass, cta }) => {
	return (
		<button onClick={cta} className={nameOfClass}>
			{text}
		</button>
	);
};

export default MainButton;
