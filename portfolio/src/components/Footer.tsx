import { FC } from 'react';

const Footer: FC = () => {
	return (
		<footer className='footer'>
			<div className='footer-bg'>
				<div className='footer-container container grid'>
					<div>
						<h1 className='footer-title'>Jose</h1>
						<span className='footer-subtitle'>Software Engineer</span>
					</div>

					<ul className='footer-links'>
						<li>
							<a href='#about' className='footer-link'>
								About Me
							</a>
						</li>
						<li>
							<a href='#skills' className='footer-link'>
								Skills
							</a>
						</li>
						<li>
							<a href='#portfolio' className='footer-link'>
								Portfolio
							</a>
						</li>
						<li>
							<a href='#contact' className='footer-link'>
								Contact Me
							</a>
						</li>
					</ul>

					<div className='footer-socials'>
						<a
							href='https://www.linkedin.com/in/hilariooo/'
							target='_blank'
							className='footer-social'>
							<i className='uil uil-linkedin-alt'></i>
						</a>
						<a
							href='https://github.com/Hilarioo/'
							target='_blank'
							className='footer-social'>
							<i className='uil uil-github-alt'></i>
						</a>
						<a
							href='https://dribbble.com/Hilarioo/'
							target='_blank'
							className='footer-social'>
							<i className='uil uil-dribbble'></i>
						</a>
					</div>
				</div>
				<p className='footer-copy'>&#169; Hilarioo | All Rights Reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
