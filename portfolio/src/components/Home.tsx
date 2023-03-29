import { FC, useState } from 'react';
import Astronaut from '../assets/img/astronaut.svg';

const Home: FC = () => {
	const [typewriter, setTypewritter] = useState(false);

	setTimeout(() => {
		setTypewritter(true);
	}, 4500);

	return (
		<section className='home section' id='home'>
			<div className='home-container container grid'>
				<div className='home-content grid'>
					<div className='home-social'>
						<a
							href='https://www.linkedin.com/in/hilariooo/'
							target='_blank'
							className='home-social-icon'>
							<i className='uil uil-linkedin-alt'></i>
						</a>
						<a
							href='https://github.com/Hilarioo/'
							target='_blank'
							className='home-social-icon'>
							<i className='uil uil-github-alt'></i>
						</a>
						<a
							href='https://dribbble.com/Hilarioo/'
							target='_blank'
							className='home-social-icon'>
							<i className='uil uil-dribbble'></i>
						</a>
					</div>

					<div className='home-img'>
						<img src={Astronaut} alt='img' id='home-blob-img' />
						<div className='home-blob'></div>
					</div>

					<div className='home-data'>
						<div className='typewriter'>
							<h1
								className='home-title'
								id='home-title'
								style={typewriter ? { borderStyle: 'none' } : {}}>
								Hi, I'm Jose
							</h1>
						</div>
						<h3 className='home-subtitle'>Software Engineer</h3>
						<p className='home-description'>
							I am a San Francisco State University graduate with a B.S. in
							Computer Science and a strong passion for creating clean and
							efficient code. Although my concentration is currently in frontend
							development, I am actively working on expanding my knowledge to
							become a well-rounded engineer.
						</p>
						<a href='#contact' className='button button-flex'>
							Contact Me <i className='uil uil-message button-icon'></i>
						</a>
					</div>
				</div>

				<div className='home-scroll'>
					<a href='#about' className='home-scroll-button button-flex'>
						<span className='home-scroll-name'>Scroll Down</span>
						<i className='uil uil-arrow-down home-scroll-arrow'></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Home;
