import { FC } from 'react';
import Accomplishment from './Accomplishment';
import Certificate from './Certificate';
import accomplishments from '../assets/data/accomplishments';

const Accomplishments: FC = () => {
	return (
		<section className='accomplishments section'>
			<h2 className='section-title'>Accomplishments</h2>
			<span className='section-subtitle'>Things I've Done</span>

			<div className='accomplishments-container container grid'>
				{accomplishments.achievements.map((accomplishment, i) => (
					<Accomplishment key={i} accomplishment={accomplishment} />
				))}
				{accomplishments.certificates.map((certificate, i) => (
					<Certificate key={i} accomplishment={certificate} />
				))}
			</div>
		</section>
	);
};

export default Accomplishments;
