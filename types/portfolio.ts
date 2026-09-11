export enum SectionId { About = 'about', Work = 'work', Experience = 'experience', Skills = 'skills', Contact = 'contact' }
export enum ProjectCategory { Frontend = 'Frontend', Forms = 'Forms', State = 'State management' }
export enum SkillLevel { Core = 'Core expertise', Workflow = 'Engineering workflow', Learning = 'Expanding my stack' }
export interface Project { title: string; repository: string; description: string; category: ProjectCategory; tags: string[]; }
