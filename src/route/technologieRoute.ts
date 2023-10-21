import { Router } from 'express';
import { checkExistsUserAccount } from '../middleware/checkExistesUserAccount';
import {
	createTechnologie,
	getTechnologies,
	putTechnologies,
	patchTechnologies,
	deleteTechnologies,
} from '../controller/tecnologieController';

const router = Router();

router.get('/', checkExistsUserAccount, getTechnologies);

router.post('/', checkExistsUserAccount, createTechnologie);

router.put('/:id', checkExistsUserAccount, putTechnologies);

router.patch('/:id/studied', checkExistsUserAccount, patchTechnologies);

router.delete('/:id', checkExistsUserAccount, deleteTechnologies);

export { router as technologieRouter };
