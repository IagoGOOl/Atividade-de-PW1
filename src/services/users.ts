import { Technologie } from '../@types/Technologies';
import { User } from '../@types/User';

let userDB: User[] = [];

export const serviceCreateUser = ({
	id,
	name,
	username,
	technologies,
}: User) => {
	const data = { id, name, username, technologies: [] };
	userDB.push(data);
};

export const serviceGetUser = (id: string) => {
	return userDB.find((obj) => obj.id === id);
};

export const serviceUpdateUser = (id: string, data: User) => {
	userDB = userDB.map((obj) => {
		if (obj.id === id) {
			return { ...obj, ...data };
		}
		return obj;
	});
};

export const serviceDeleteUser = (id: string) => {
	userDB = userDB.filter((obj) => obj.id !== id);
};
