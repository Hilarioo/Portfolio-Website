import { FC, useState, useContext, createContext, ReactNode } from 'react';
import { default as data } from '../assets/data/skills';
import { SkillInterface } from '../interface/Skill';

type Props = { children: ReactNode };

const skillsState = {
	skills: data,
	setSkills: (newSkills: SkillInterface[]): void => {
		/**/
	},
};

const SkillsContext = createContext(skillsState);

export const SkillsProvider: FC<Props> = ({ children }) => {
	const [skills, setSkills] = useState<SkillInterface[]>(data);

	return (
		<SkillsContext.Provider value={{ skills, setSkills }}>
			{children}
		</SkillsContext.Provider>
	);
};

export const useSkills = () => {
	const { skills, setSkills } = useContext(SkillsContext);
	if (skills === undefined) {
		throw new Error('useSkills must be used within a SkillsProvider');
	}
	return { skills, setSkills };
};
