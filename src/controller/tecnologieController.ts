import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';

import {
	serviceCreateTechnologies,
	serviceUpdateTechnologies,
	serviceDeleteTechnologies,
	serviceGetAllTechnologies,
	serviceGetTechnologies,
} from '../services/technologies';

import { serviceGetUser } from '../services/users';

const verifyFields = (
	{ title, deadline }: { title: string; deadline: string },
	res: Response
) => {
	if (!title || !deadline) {
		return res
			.status(400)
			.json({ message: 'title or deadline are required' });
	}
};

const technologieExist = (idTec: string, idUser: string, res: Response) => {
	const tec = serviceGetTechnologies(idTec, idUser);
	const isTecExist = Boolean(tec);
	if (!isTecExist) {
		return res.status(404).json({ message: 'Technologie not found' });
	}
};

export const createTechnologie = (req: Request, res: Response) => {
	const { title, deadline } = req.body;
	const { userid } = req.headers;

	verifyFields({ title, deadline }, res);

	const newTec: any = { title, deadline };
	const tecnologie = serviceCreateTechnologies(userid as string, newTec);
	return res.status(201).json(tecnologie);
};

export const getTechnologies = (req: Request, res: Response) => {
	const { userid } = req.headers;
	const tecnologie = serviceGetAllTechnologies(userid as string);
	return res.status(200).json(tecnologie);
};

export const putTechnologies = (req: Request, res: Response) => {
	const { id } = req.params;
	const { userid } = req.headers;
	const { title, deadline } = req.body;

	verifyFields({ title, deadline }, res);
	technologieExist(id, userid as string, res);

	const newTec: any = { title, deadline };
	const tec = serviceUpdateTechnologies(id, userid as string, newTec);
	return res.status(203).json(tec);
};

export const patchTechnologies = (req: Request, res: Response) => {
	const { userid } = req.headers;
	const { id } = req.params;
	const data = req.body;

	technologieExist(id, userid as string, res);

	const tec = serviceUpdateTechnologies(id, userid as string, data);
	return res.status(203).json(tec);
};

export const deleteTechnologies = (req: Request, res: Response) => {
	const { userid } = req.headers;
	const { id } = req.params;

	technologieExist(id, userid as string, res);
	serviceDeleteTechnologies(id, userid as string);

	return res.status(204).send();
};
