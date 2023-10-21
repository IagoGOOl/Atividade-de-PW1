import { User } from '../@types/User';

declare namespace Config {
	export interface Request {
		user: User;
	}
}
