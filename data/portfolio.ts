import { ProjectCategory, SectionId, SkillLevel, type Project } from '@/types/portfolio';
export const profile = { name: 'Vikas William', role: 'Senior Frontend Engineer', location: 'Kolkata, India', linkedin: 'https://www.linkedin.com/in/vikas-william-coder/', github: 'https://github.com/VikasWilliam' };
export const navigation = [{id: SectionId.Work, label: 'Selected work'}, {id: SectionId.Experience, label: 'Experience'}, {id: SectionId.Skills, label: 'Expertise'}];
export const projects: Project[] = [
{title: 'Routing & Redux playground', repository: 'routing_redux_tabs', description: 'A React playground bringing together navigation, shared state, and component development with Storybook.', category: ProjectCategory.State, tags: ['React', 'Redux Toolkit', 'React Router', 'Storybook']},
{title: 'Dynamic form exploration', repository: 'dynamicform', description: 'A dedicated repository for exploring form-driven interfaces and building fluency with React.', category: ProjectCategory.Forms, tags: ['React', 'Forms', 'Learning project']},
{title: 'React, Redux & TypeScript', repository: 'react-redux-typescript-api', description: 'A practice project focused on the intersection of React interfaces, state management, TypeScript, and APIs.', category: ProjectCategory.Frontend, tags: ['React', 'TypeScript', 'Redux', 'API practice']}
];
export const experience = [
{company:'Tata Consultancy Services',role:'Associate Consultant',period:'Jun 2025 — Present',summary:'Frontend development for banking modernization. Working with React, TypeScript, LitElement, dynamic forms, REST API integration, and Azure DevOps.'},
{company:'Infosys',role:'Technology Lead',period:'2022 — 2025',summary:'React frontend development in enterprise delivery, building on a foundation in application support and banking technology.'},
{company:'IBM',role:'Application support & development',period:'2016 — 2022',summary:'Built a strong foundation in production support, troubleshooting, and client delivery before transitioning into development.'}
];
export const skills = [
{level:SkillLevel.Core, title:'Interfaces that work.',items:['React','TypeScript','JavaScript','Web Components','LitElement','Redux Toolkit','REST API integration','Dynamic forms']},
{level:SkillLevel.Workflow,title:'Built with care.',items:['Git','Azure DevOps','Storybook','GitHub Copilot','AI-assisted development','Component testing']},
{level:SkillLevel.Learning,title:'Always moving forward.',items:['Java & Spring Boot','Node.js & Express','PostgreSQL','AI fundamentals']}
];
