import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';
import { User } from '../@types/User';
import {
	serviceCreateUser,
	serviceUpdateUser,
	serviceDeleteUser,
	serviceGetUser,
} from '../services/users';

import { users } from '../server';

export const createUser = (req: Request, res: Response) => {
	const { name, username } = req.body;

	const userExists = users.some((user) => user.username === username);

	if (!name || !username) {
		return res.status(400).json({ error: 'Error: user exists' });
	}

	if (userExists) {
		return res.status(400).json({ error: 'Error: user exists' });
	}

	const newUser: User = {
		name,
		username,
		id: uuidv4(),
		technologies: [],
	};

	serviceCreateUser(newUser);
	users.push(newUser);

	return res.status(201).json(newUser);
};
