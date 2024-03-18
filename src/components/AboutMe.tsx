import Selfie from '../assets/img/selfie.jpg';
import Resume from '../assets/pdf/Jose_Gonzalez_Martinez_Resume_2024.pdf';

const AboutMe = () => {
	return (
		<section className='about section' id='about'>
			<h2 className='section-title'>About Me</h2>
			<span className='section-subtitle'>My Introduction</span>
			<div className='about-container container grid'>
				<img src={Selfie} alt='selfie' className='about-img' />
				<div className='about-data'>
					<p className='about-description'>
						As a first-generation college student, I have always been eager to
						learn and grow. This drive led me to build a non-profit organization
						and found a computer science club in college. I have also pushed
						myself by attending multiple hackathons, where my hard-working ethic
						and dedication to development led me to take first place in one of
						them. I constantly seek new opportunities to learn and challenge
						myself while bringing my expertise to produce clean and efficient
						code for every project I work on.
					</p>
					<div className='about-info'>
						<div>
							<span className='about-info-title'>06+</span>
							<span className='about-info-name'>
								Years <br /> Experience
							</span>
						</div>
						<div>
							<span className='about-info-title'>15+</span>
							<span className='about-info-name'>
								Completed <br /> Projects
							</span>
						</div>
						<div>
							<span className='about-info-title'>06+</span>
							<span className='about-info-name'>
								Companies <br /> Worked
							</span>
						</div>
					</div>

					<div className='about-buttons'>
						<a target='_blank' href={Resume} className='button button-flex'>
							Resume PDF <i className='uil uil-import button-icon'></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
