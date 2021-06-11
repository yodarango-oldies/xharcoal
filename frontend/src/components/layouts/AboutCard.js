import profilePhoto from '../../images/Me.svg';
const AboutCard = () => {
	return (
		<div className='about-card'>
			<img
				src={profilePhoto}
				alt='profile of someone'
				className='about-card_img'
			/>
			<p className='about-description'>
				{`Hello, My name is Daniel R. and I am a passionate web developer who loves to code. I am the person behind the curtains of this and many other websites and web apps. 
                I graduated with a degree in cyber security in 2019 but decided to dive into the software development and Graphic design world shortly after. Upon a couple years of working for a company and 
                creating projects for personal use I decided to offer my services to clients and open my small start up company, Xharcoal. 
                
                My main goal is to make of Xharcoal a big, reputable, and successful enterprise. Do you need a website, graphic design, or web app? Let me do that for you! 😉`}
			</p>
		</div>
	);
};

export default AboutCard;
