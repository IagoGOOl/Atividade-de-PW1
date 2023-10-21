import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { createUser } from '../controller/userController';

import { users } from '../server';
import { User } from '../@types/User';

const router = Router();

router.post('/', createUser);

export { router as userRoute };
