import { FC } from 'react';
import Skill from './Skill';
import { useSkills } from '../context/SkillsContext';

const Skills: FC = () => {
	const { skills } = useSkills();

	return (
		<section className='skills section' id='skills'>
			<h2 className='section-title'>Skills</h2>
			<span className='section-subtitle'>My Technical Level</span>
			<div className='skills-container container grid'>
				{skills.map((skill, i) => (
					<Skill key={i} skill={skill} />
				))}
			</div>
		</section>
	);
};

export default Skills;
