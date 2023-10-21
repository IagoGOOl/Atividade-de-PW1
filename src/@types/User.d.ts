import { Technologie } from './Technologies';

export type User = {
	id: string;
	name: string;
	username: string;
	technologies: Technologie[];
};
