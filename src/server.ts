import express from 'express';
import { User } from './@types/User';
import { technologieRouter } from './route/technologieRoute';
import { userRoute } from './route/userRoute';
export const users = [] as User[];

const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/technologies', technologieRouter);
app.use('/users', userRoute);

app.listen(PORT, () => console.log(`Server is Running on port: ${PORT}`));
