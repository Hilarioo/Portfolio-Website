interface Tool {
	name: string;
	proficiency: number;
}

export interface SkillInterface {
	id: number;
	title: string;
	subtitle: string;
	icon: string;
	isOpen: boolean;
	tools: Tool[];
}

