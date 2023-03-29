import { FC } from 'react';
import { SkillInterface } from '../interface/Skill';
import { useSkills } from '../context/SkillsContext';

interface Skill {
	skill: SkillInterface;
}

const Skill: FC<Skill> = ({ skill }) => {
	const { skills, setSkills } = useSkills();

	const toggleOpen = () => {
		const updateSkills = [...skills];
		updateSkills[skill.id] = { ...skill, isOpen: !skill.isOpen };
		setSkills(updateSkills);
	};

	return (
		<div
			className={
				skill.isOpen
					? 'skills-content skills-open'
					: 'skills-content skills-close'
			}
			onClick={toggleOpen}>
			<div className='skills-header'>
				<i className={`uil ${skill.icon} skills-icon`}></i>

				<div>
					<h1 className='skills-title'>{skill.title}</h1>
					<span className='skills-subtitle'>{skill.subtitle}</span>
				</div>

				<i className='uil uil-angle-down skills-arrow'></i>
			</div>

			<div className='skills-list grid'>
				{skill.tools.map((tool, i) => (
					<div key={i} className='skills-data'>
						<div className='skills-title'>
							<h3 className='skills-name'>{tool.name}</h3>
							<span className='skills-number'>{tool.proficiency}%</span>
						</div>
						<div className='skills-bar'>
							<span
								className='skills-percentage'
								style={{ width: `${tool.proficiency}%` }}></span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skill;
