import { Response, Request, NextFunction } from 'express';
import { serviceGetUser } from '../services/users';

export function checkExistsUserAccount(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const userId = req.headers.userid;
	const user = serviceGetUser(userId as string);

	if (!user) {
		return res.status(404).json({ error: 'User not found' });
	}

	next();
}
