import { FC } from 'react';
import { Certificate } from '../interface/Accomplishment';

interface Accomplishment {
	accomplishment: Certificate;
}

const Certificate: FC<Accomplishment> = ({ accomplishment }) => {
	return (
		<div className='accomplishments-content'>
			<div>
				<i className='uil uil-award accomplishments-icon'></i>
				<h3 className='accomplishments-title'>
					{accomplishment.title} <br /> Certificate
				</h3>
			</div>
			<a
				href={accomplishment.url}
				target='_blank'
				className='button button-flex button-small button-link accomplishments-link'>
				View More
				<i className='uil uil-arrow-right button-icon'></i>
			</a>
		</div>
	);
};

export default Certificate;
