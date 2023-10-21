import { v4 as uuidv4 } from 'uuid';

import { Technologie } from '../@types/Technologies';
import { User } from '../@types/User';

import { serviceGetUser, serviceUpdateUser } from './users';

export const serviceCreateTechnologies = (
	idUser: string,
	{ title, studied, deadline, created_at }: Technologie
) => {
	const user: any = serviceGetUser(idUser);
	const data = {
		id: uuidv4(),
		title,
		studied: false,
		deadline: new Date(deadline),
		created_at: new Date(),
	};
	user?.technologies.push(data);
	return data;
};

export const serviceGetTechnologies = (id: string, idUser: string) => {
	const user = serviceGetUser(idUser);
	return user?.technologies.find((obj: Technologie) => obj.id === id);
};

export const serviceGetAllTechnologies = (idUser: string) => {
	const user = serviceGetUser(idUser);
	return user?.technologies;
};

export const serviceUpdateTechnologies = (
	id: string,
	idUser: string,
	data: Technologie
) => {
	const user: any = serviceGetUser(idUser);
	const technologies: Technologie[] = user?.technologies.map(
		(obj: Technologie) => {
			if (obj.id === id) {
				return { ...obj, ...data };
			}
			return obj;
		}
	);

	const newUser: User = { ...user, technologies };
	serviceUpdateUser(idUser, newUser);

	const tec = serviceGetTechnologies(id, idUser);
	return tec;
};

export const serviceDeleteTechnologies = (id: string, idUser: string) => {
	const user: any = serviceGetUser(idUser);
	const technologies: Technologie[] = user?.technologies.filter(
		(obj: Technologie) => obj.id !== id
	);
	const newUser: User = { ...user, technologies };
	serviceUpdateUser(idUser, newUser);
	return true;
};
