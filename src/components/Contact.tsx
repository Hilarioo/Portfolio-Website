import { FC } from 'react';

const Contact: FC = () => {
	return (
		<section className='contact section' id='contact'>
			<h2 className='section-title'>Contact Me</h2>
			<span className='section-subtitle'>Get in touch</span>

			<div className='contact-container container grid'>
				<div>
					<div className='contact-information'>
						<i className='uil uil-phone-alt contact-icon'></i>
						<div>
							<h3 className='contact-title'>Call Me</h3>
							<span className='contact-subtitle'>925-726-6403</span>
						</div>
					</div>

					<div className='contact-information'>
						<i className='uil uil-envelope contact-icon'></i>
						<div>
							<h3 className='contact-title'>Email</h3>
							<span className='contact-subtitle'>
								gonzalezhilariojose@gmail.com
							</span>
						</div>
					</div>

					<div className='contact-information'>
						<i className='uil uil-map-pin contact-icon'></i>
						<div>
							<h3 className='contact-title'>Location</h3>
							<span className='contact-subtitle'>Concord, CA</span>
						</div>
					</div>
				</div>

				<form
					name='contact'
					method='POST'
					data-netlify-recaptcha='true'
					data-netlify='true'
					className='contact-form grid'>
					<div className='contact-inputs grid'>
						<div className='contact-content'>
							<label className='contact-label'>Name</label>
							<input
								type='text'
								className='contact-input'
								name='name'
								required
							/>
						</div>
						<div className='contact-content'>
							<label className='contact-label'>Company</label>
							<input type='text' className='contact-input' name='company' />
						</div>
					</div>
					<div className='contact-content'>
						<label className='contact-label'>Email</label>
						<input
							type='email'
							className='contact-input'
							name='email'
							required
						/>
					</div>
					<div className='contact-content'>
						<label className='contact-label'>Message</label>
						<textarea
							cols={0}
							rows={4}
							className='contact-input'
							name='message'
							required></textarea>
					</div>
					<div data-netlify-recaptcha='true'></div>
					<div>
						<button className='button button-flex' type='submit'>
							Send Message
							<i className='uil uil-message button-icon'></i>
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
