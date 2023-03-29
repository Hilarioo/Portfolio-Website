import { FC, useState } from 'react';
import { Achievement } from '../interface/Accomplishment';

interface Accomplishment {
	accomplishment: Achievement;
}

const Accomplishment: FC<Accomplishment> = ({ accomplishment }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	const header = accomplishment.title.split(' ');

	return (
		<div className='accomplishments-content'>
			<div>
				<i className={`uil ${accomplishment.icon} accomplishments-icon`}></i>
				<h3 className='accomplishments-title'>
					{header.slice(0, 2).join(' ')}
					<br />
					{header.slice(2).join(' ')}
				</h3>
			</div>
			<span
				className='button button-flex button-small button-link accomplishments-button'
				onClick={toggleModal}>
				View More
				<i className='uil uil-arrow-right button-icon'></i>
			</span>

			<div
				className={
					isOpen
						? 'accomplishments-modal active-modal'
						: 'accomplishments-modal'
				}>
				<div className='accomplishments-modal-content'>
					<h4 className='accomplishments-modal-title'>
						{header.slice(0, 2).join(' ')}
						<br />
						{header.slice(2).join(' ')}
					</h4>
					<i
						className='uil uil-times accomplishments-modal-close'
						onClick={toggleModal}></i>

					<img
						className='accomplishments-img'
						src={accomplishment.image}
						alt={`${accomplishment.title} Image`}
						style={{ maxHeight: 175 }}
					/>
					<p className='accomplishments-text'>{accomplishment?.description}</p>

					<ul className='accomplishments-modal-accomplishments grid'>
						{accomplishment.bulletpoints.map((bulletpoint, i) => (
							<li key={i} className='accomplishments-modal-service'>
								<i className='uil uil-check-circle accomplishments-icon'></i>
								<p>{bulletpoint}</p>
							</li>
						))}
					</ul>

					<div className='accomplishments-socials'>
						{accomplishment.links?.map((link, i) => (
							<a key={i} href={link.url} target='_blank'>
								<i className={`uil ${link.icon} accomplishments-social`}></i>
								{link.name ? (
									<span className='accomplishments-social-text'>
										{link.name}
									</span>
								) : null}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accomplishment;
